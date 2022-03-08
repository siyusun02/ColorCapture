const { query, getClient } = require('../db/index');

module.exports = {
  getPalettes: async () => {
    const { rows } = await query(`
    SELECT s.id,
        s.title,
        s.creator,
        s.createdate,
        s.comment,
        s.imgname,
        json_agg(color) as palette
    FROM savpalettes s
    JOIN colors c on s.id = c.palette
    GROUP BY s.id;
    `);
    return rows;
  },
  addPalette: async ({ title, creator, comment, imgname, palette }) => {
    const client = await getClient();
    try {
      await client.query('BEGIN');
      const { rows } = await client.query(
        `INSERT INTO savpalettes (id, title, creator, createdate, comment, imgname)
        VALUES (default, $1, $2, CURRENT_TIMESTAMP, $3, $4)
        RETURNING id;`,
        [title, creator, comment, imgname]
      );
      const { id } = rows[0];
      const res = [];
      for (const color of palette) {
        res.push(
          client.query(
            `INSERT INTO colors (id, palette, color)
          VALUES (default, $1, $2)`,
            [id, color]
          )
        );
      }
      await Promise.all(res);
      await client.query('COMMIT');
      return id;
    } catch (e) {
      await client.query('ROLLBACK');
      throw e;
    } finally {
      client.release();
    }
  },
  delPalette: async (id) => {
    const { rows } = await query(
      'DELETE FROM savpalettes WHERE id=$1 RETURNING *',
      [id]
    );
    return rows[0];
  },
  editPalette: async (id, newC) => {
    const { rows } = await query(
      `UPDATE savpalettes
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
