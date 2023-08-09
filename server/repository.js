const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const query = `
      SELECT
        level,
        min_mark,
        max_mark,
        grade
      FROM grade_scale 
      ORDER BY
        id
    `;

      const result = await db.query(query);

      return result.rows.map((row) => ({
        level: row.level,
        min_mark: row.min_mark,
        max_mark: row.max_mark,
        grade: row.grade,
      }));
    } catch (error) {
      throw Error("Failed to fetch grade scale data: " + error.message);
    }
  },
};
