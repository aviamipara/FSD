const expr = require('express');
const path = require('path');
const app = expr();



app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"196.html"}))


app.post('/process', (req, res) => {
    const { username, password, confirm_password, gender } = req.body;

    if (password !== confirm_password) {

        return res.send(`
            <h3 style="color: red;">
                Error: Password and Confirm Password do not match! 
                Processing terminated.
            </h3>
            <a href="/">Go Back</a>
        `);
    }

    res.send(`
        <h2>Form Submission Successful</h2>
        <hr>
        <ul>
            <li><strong>Username:</strong> ${username}</li>
            <li><strong>Gender:</strong> ${gender}</li>
            <li><strong>Password Status:</strong> Verified and Matched</li>
        </ul>
        <p><em>Note: For security, the password value is not displayed.</em></p>
    `);
});

app.listen(2000)