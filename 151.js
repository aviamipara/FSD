const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '151.html'));
});


app.post('/submit', (req, res) => {
    
    const { studentName, mobileNo } = req.body;

    console.log('--- Student Data Received ---');
    console.log(`Student Name: ${studentName}`);
    console.log(`Mobile Number: ${mobileNo}`);
    console.log('-----------------------------');

    res.send('Student information submitted successfully! Check your console.');
});

app.listen(3006)