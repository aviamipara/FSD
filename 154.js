const express = require('express');
const app = express();

app.get('/students', (req, res) => {
    let students = [
        { name: "John", height: 175 },
        { name: "Alice", height: 162 },
        { name: "Bob", height: 180 }
    ];

    students.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });


    res.json({
        message: "Sorted Student Data",
        data: students
    });
});

app.listen(3004)