const express = require('express');
const path = require('path');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname , {index : "144.html"}))

app.post('/check', (req, res) => {
    const { username } = req.body;
    if (username === 'admin') {
        next();
    } else {
        res.send('<h2 style="color: red;">Warning: Access Denied. You are not admin!</h2>');
    }
}, (req, res) => {
    res.send('<h2>Welcome... admin</h2>');
});

app.listen(7070)