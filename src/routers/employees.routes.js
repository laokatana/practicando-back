const express = require("express");

const router = express.Router();

const controllerEmployees = require("../controllers/employees.controller");

const [getEmployees,getEmployeesId, createEmployees, updateEmployees, deleteEmployees] =
  controllerEmployees;

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeesId);
router.post("/employees", createEmployees);
router.put("employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

module.exports = router;
