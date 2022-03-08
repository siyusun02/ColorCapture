/* eslint-disable comma-dangle */
const { query } = require('../db/index');

// const delPerson = async (id) => {
//   const { rows } = await query(`
//   DELETE FROM people
//   WHERE id = $1
//   RETURNING *;`, [id]);
//   return rows[0];
// };

module.exports = {
  getColors: async () => {
    const { rows } = await query(`
    SELECT id, title, color, creator, comment, createdate, imgname
    FROM savcolors;
    `);
    return rows;
  },
  addColor: async ({ title, color, creator, comment, imgname }) => {
    const { rows } = await query(
      `
      INSERT INTO savcolors (id, title, color, creator, createdate, comment, imgname)
      VALUES (default, $1, $2, $3, CURRENT_TIMESTAMP, $4, $5)
      RETURNING *;
      `,
      [title, color, creator, comment, imgname]
    );
    return rows[0];
  },
  delColor: async (id) => {
    const { rows } = await query(
      'DELETE FROM savcolors WHERE id=$1 RETURNING *',
      [id]
    );
    return rows[0];
  },
  editColor: async (id, newC) => {
    const { rows } = await query(
      `UPDATE savcolors
        SET title = $2,
            creator = $3,
            comment = $4
        WHERE id=$1
        RETURNING *`,
      [id, newC.title, newC.creator, newC.comment]
    );
    return rows[0];
  },
};
