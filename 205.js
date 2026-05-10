const express = require('express');
const app = express();


const student_result = [
    { Name: "Arjun", Roll_no: 1, Division: "A", Percentage: 85, Grade: "A" },
    { Name: "Sneha", Roll_no: 2, Division: "B", Percentage: 92, Grade: "O" },
    { Name: "Rahul", Roll_no: 3, Division: "A", Percentage: 78, Grade: "B" },
    { Name: "Priya", Roll_no: 4, Division: "C", Percentage: 88, Grade: "A" }
];


app.get('/result', (req, res) => {
    res.json(student_result);
});

app.get('/result/:roll', (req, res) => {
    
    const rollNo = parseInt(req.params.roll);
    
    
    const student = student_result.find(s => s.Roll_no === rollNo);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: "Student with that Roll number not found." });
    }
});

app.listen(3002);