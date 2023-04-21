const pool = require("../db.js");

const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 1+1 AS results");
  res.json(result[0]);
}

module.exports = ping