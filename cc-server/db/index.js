const { Pool } = require('pg');

require('@dotenvx/dotenvx').config();

const pool = new Pool({
  connectionString: process.env.DB_CONN_STRING,
});

module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
  async getClient() {
    const client = await pool.connect();
    const { query } = client;
    const { release } = client;
    // set a timeout of 5 seconds, after which we will log this client's last query
    const timeout = setTimeout(() => {
      console.error('A client has been checked out for more than 5 seconds!');
      console.error(
        `The last executed query on this client was: ${client.lastQuery}`
      );
    }, 5000);
    // monkey patch the query method to keep track of the last query executed
    client.query = (...args) => {
      client.lastQuery = args;
      return query.apply(client, args);
    };
    client.release = () => {
      // clear our timeout
      clearTimeout(timeout);
      // set the methods back to their old un-monkey-patched version
      client.query = query;
      client.release = release;
      return release.apply(client);
    };
    return client;
  },
};
