const { Schema, model } = require("mongoose");


const employeeSchema = new Schema({
    employee_id: {
        type: String,
        unique: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    department: {
        type: String
    },
    dob: {
        type: Date
    },
    salary: {
        type: Number
    },

})

const EmployeeModel = model("employee", employeeSchema);

module.exports = { EmployeeModel }