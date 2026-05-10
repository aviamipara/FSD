const express = require('express');
const app = express();

const employee_data = [
    { Emp_id: 1, Name: "Amit Sharma", Department: "IT", Salary: 75000, Experience: "5 years" },
    { Emp_id: 2, Name: "Sana Khan", Department: "HR", Salary: 60000, Experience: "3 years" },
    { Emp_id: 3, Name: "John Doe", Department: "Finance", Salary: 90000, Experience: "8 years" },
    { Emp_id: 4, Name: "Priya Das", Department: "Marketing", Salary: 55000, Experience: "2 years" }
];


app.get('/employees', (req, res) => {
    res.json(employee_data);
});


app.get('/employees/:id', (req, res) => {
    
    const reqId = parseInt(req.params.id);
    

    const employee = employee_data.find(emp => emp.Emp_id === reqId);

    if (employee) {
        res.json(employee);
    } else {
        res.status(404).json({ error: "Employee not found" });
    }
});

app.listen(3003);