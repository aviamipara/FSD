const express = require('express');
const app = express();

app.get('/results', (req, res) => {
    let students = [
        { name: "John", score: 85 },
        { name: "Alice", score: 98 },
        { name: "Bob", score: 72 }
    ];


    students.sort((a, b) => b.score - a.score);

   
    res.json({
        category: "Student Scores",
        sorted_data: students
    });
});

app.listen(5001)