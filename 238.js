const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(express.urlencoded())
app.use(express.static("../public",{index:"238.html"}))


app.post('/response', async (req, res) => {
    const { name, email } = req.body;

    let trans= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-app-password'     
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Response Received',
        text: `Hello ${name},\n\nThank you for your response! We have received your submission.`
    };

});

trans.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log("Error occurred:", err.message)
    } else {
        console.log("Email sent successfully!", info.response)
    }
})
app.listen(3000);