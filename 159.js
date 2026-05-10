const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname , {index : "159.html"}))

app.get('/display', (req, res) => {

    const { username, country } = req.query;

    res.send(`
        <h3>Hello, ${username}!</h3>
        <p>You are from "${country}"</p>
        <br>
        <a href="/">Go Back</a>
    `);
});

app.listen(3009)