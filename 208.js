const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("../public",{index:"208.html"}))


app.post('/signup', (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender
    };

    res.cookie('registered', JSON.stringify(userData), { maxAge: 15000 });

    res.send(`
        <h3>Registration Successful!</h3>
        <p>Your details are stored in a cookie for 15 seconds.</p>
        <a href="/details">View My Details</a>
    `);
});

app.get('/details', (req, res) => {
    const cookieData = req.cookies.registered;

    if (cookieData) {
        const user = JSON.parse(cookieData);
        res.send(`
            <h2>Stored Details</h2>
            <hr>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send(`
            <h3>Session Expired!</h3>
            <p>The cookie has expired (15-second limit reached).</p>
            <a href="/">Go back to Signup</a>
        `);
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('registered');
    res.redirect('/');
});

app.listen(3003);