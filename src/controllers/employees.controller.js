const pool = require("../db.js");

const getEmployees = async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM employee; `);
  return res.send({ rows });
};

const getEmployeesId = async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM employee WHERE id = ?; `, [
    req.params.id,
  ]);

  rows.length <= 0
    ? res.status(404).json({
        message: "no se encontro ningun empleado",
      })
    : res.json(rows);
};

const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(name,salary) VALUES(?,?) ",
    [name, salary]
  );

  return res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

const updateEmployees = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const [result] = await pool.query(
      "UPDATE employee SET name = (?, name), WHERE id = ?",
      [name, id]
    );

    res.send("datos actualizados");
    return res.send({ result });
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployees = async (req, res) => {
  const result = await pool.query(`DELETE FROM employee WHERE id = ?; `, [
    req.params.id,
  ]);

  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: "no se encontro ningun empleado",
    })
  }
  console.log(result)
  res.sendStatus(204);
  
  /*
  result.affectedRows <= 0
    ? res.status(404).json({
        message: "no se encontro ningun empleado",
      })
    : res.sendStatus(204);
  */
};

const controllerEmployees = [
  getEmployees,
  getEmployeesId,
  createEmployees,
  updateEmployees,
  deleteEmployees,
];

module.exports = controllerEmployees;
