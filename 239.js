const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.get('/send-mail', async (req, res) => {
    let trans= nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'lju@gmail.com',
            pass: 'your-app-password' 
        }
    });

    let mailOptions = {
        from: 'lju@gmail.com',
        to: 'student@gmail.com, faculty@gmail.com', 
        subject: 'LJ University',
        html: `
            <h3>Welcome Student</h3>
            <table border="1" style="border-collapse: collapse; width: 50%;">
                <tr>
                    <th style="padding: 8px; background-color: white;">Date</th>
                    <th style="padding: 8px; background-color: white;">Exam Name</th>
                </tr>
                <tr>
                    <td style="padding: 8px; text-align: center;">28/06/23</td>
                    <td style="padding: 8px; text-align: center;">FSD-2</td>
                </tr>
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