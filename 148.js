const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname , {index : "148.html"}))

app.post('/submit-data', (req, res) => {
    const userData = req.body;
    
    console.log('--- New Form Submission ---');
    console.log('Full Name:', userData.fname);
    console.log('Email:', userData.email);
    console.log('Full Object:', userData);
    
    res.send('Data received successfully! Check your console.');
});

app.listen(3000)