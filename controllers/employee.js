const { EmployeeModel } = require("../models/EmployeeModel");

// Add employee
const addEmployee = async (req, res) => {
    try {
        const payload = req.body;
        console.log('payload: ', payload);
        const employee = new EmployeeModel(payload);
        await employee.save();
        res.status(200).json({ message: "Employee Added Successfully" });
    }
    catch (error) {
        return res.status(404).json({ error: error });
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const employees = await EmployeeModel.find()
        res.status(200).json(employees);
    } catch (error) {
        return res.status(404).json({ error: error });
    }
}

const getSingleEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        const employees = await EmployeeModel.findOne({ employee_id: id })
        res.status(200).json(employees);
    } catch (error) {
        return res.status(404).json({ error: error });
    }
}


const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    try {
        await EmployeeModel.findOneAndDelete({ employee_id: id })
        res.send({ message: "User Delete Successfully" });
    }
    catch (error) {
        console.log('error: ', error);
        return res.status(500).json({ error: error });
    }
}

const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const employee = await EmployeeModel.findOneAndUpdate({ employee_id: id }, payload, { new: true })
        res.status(200).json({ message: 'Employee updated successfully', employee });
    }
    catch (error) {
        return res.status(500).json({ error: error })

    }
};


const filterEmployeeByDepartment = async (req, res) => {
    const { department } = req.params;
    try {
        const employees = await EmployeeModel.find({ department });
        res.status(200).json(employees);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}


const sortEmployeeBySalary = async (req, res) => {
    const { sort } = req.query;
    const sorting = sort == "hightolow" ? -1 : 1
    try {
        const employees = await EmployeeModel.find().sort({ salary: sorting })
        res.status(200).json(employees);
    } catch (error) {
        return res.status(500).json({ error: error });
    }


}

module.exports = { addEmployee, getAllEmployee, getSingleEmployee, deleteEmployee, updateEmployee, filterEmployeeByDepartment, sortEmployeeBySalary }