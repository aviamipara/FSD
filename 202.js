const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(express.urlencoded())
app.use(cookieParser());

app.use(express.static("../public",{index:"202.html"}))


app.post('/set-cookie', (req, res) => {
    const username= req.body;

    // Define cookie options: 1 day in milliseconds (24 * 60 * 60 * 1000)
    const oneDay = 24 * 60 * 60 * 1000;

    res.cookie('user_login', username, { 
        maxAge: oneDay, 
        httpOnly: true 
    });

    res.send(`
        <h1>Success!</h1>
        <p>Username <strong>${username}</strong> has been stored in a cookie.</p>
        <p>This cookie will expire in 24 hours.</p>
        <a href="/check-cookie">View Stored Cookie</a>
    `);
});

// Helper route to verify the cookie is working
app.get('/check-cookie', (req, res) => {
    const savedUser = req.cookies.user_login;
    if (savedUser) {
        res.send(`Retrieved from cookie: ${savedUser}`);
    } else {
        res.send("No cookie found.");
    }
});

app.listen(3000);