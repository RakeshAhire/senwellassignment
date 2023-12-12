const { Router } = require("express");
const { userModel } = require("../models/EmployeeModel");
const { sortEmployeeBySalary, filterEmployeeByDepartment, updateEmployee, deleteEmployee, getAllEmployee, addEmployee, getSingleEmployee } = require("../controllers/employee");

const employeeRouter = Router();

employeeRouter.post("/create", addEmployee)

employeeRouter.get("/getall", getAllEmployee);

employeeRouter.get("/singleemployee/:id", getSingleEmployee)

employeeRouter.delete("/delete/:id", deleteEmployee)

employeeRouter.put("/update/:id", updateEmployee)


employeeRouter.get('/department/:department', filterEmployeeByDepartment)

employeeRouter.get('/salary', sortEmployeeBySalary)

module.exports = { employeeRouter }