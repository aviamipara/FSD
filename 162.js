const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname , {index : "162.html"}))

const authMiddleware = (req, res, next) => {
    const { username, password } = req.body;

    if (username === "admin" && password === "1234") {
        next();
    } else {
        res.send("<h2>Invalid Credentials</h2><a href='/'>Try Again</a>");
    }
};

app.post('/auth', authMiddleware, (req, res) => {
    res.send("<h2>Login Successful</h2>");
});

app.listen(4001)