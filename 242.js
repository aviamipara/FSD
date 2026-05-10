const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();


app.use(express.urlencoded())
app.use(express.static("../public",{index:"238.html"}))

app.post('/send-timetable', async (req, res) => {
    const recipientEmail = req.body.user_email;

    let trans= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-app-password' 
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: recipientEmail,
        subject: 'Exam Timetable',
        html: `
            <h3>L J University</h3>
            <table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
                <thead>
                    <tr style="background-color: white;">
                        <th style="padding: 10px;">Date</th>
                        <th style="padding: 10px;">Exam Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px;">21/05/25</td>
                        <td style="padding: 10px;">FSD-2</td>
                    </tr>
                </tbody>
            </table>
        `
    };

    trans.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error occurred:", err.message)
        } else {
            console.log("Email sent successfully!", info.response)
        }
    })
    res.send()
});

app.listen(3000);