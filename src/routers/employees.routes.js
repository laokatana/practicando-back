const express = require("express");

const router = express.Router();

const controllerEmployees = require("../controllers/employees.controller");

const [getEmployees, createEmployees, updateEmployees, deleteEmployees] =
  controllerEmployees;

router.get("/employees", getEmployees);
router.post("/employees", createEmployees);
router.put("/employees", updateEmployees);
router.delete("/employees", deleteEmployees);

module.exports = router;
