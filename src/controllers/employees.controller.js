const pool = require("../db.js");

const getEmployees = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(name,salary) VALUES(?,?) ",
    [name, salary]
  );
  res.send({ rows });
};


const createEmployees = (req, res) => {
  res.send("creando empleados papi");
};

const updateEmployees = (req, res) => {
  res.send("actualizando empleados papi");
};

const deleteEmployees = (req, res) => {
  res.send("eliminando empleados papi");
};

const controllerEmployees = [
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
];

module.exports = controllerEmployees;
