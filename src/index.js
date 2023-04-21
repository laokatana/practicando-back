const express = require("express");
const app = express();

const employeesRoutes = require('./routers/employees.routes')
const indexRoutes = require('./routers/index.routes')

app.use(express.json())
app.use(indexRoutes)
app.use(employeesRoutes)

app.listen(3000, () => {
  console.log("server running");
});
