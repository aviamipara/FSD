const expr = require("express")
const app = expr()
const nodemailer = require("nodemailer")

var trans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Explicitly use SSL for port 465
    auth: {
        user: "avirajamipara5220@gmail.com",
        pass: "rjev tzfi vqpz jxmp"
    },
    tls: {
        // This bypasses the 'self-signed certificate' error
        rejectUnauthorized: false
    }
})

var mailOptions = {
    from: "avirajamipara5220@gmail.com",
    to: "aviamipara5220@gmail.com, eventnest01@gmail.com",
    subject: "Hello",
    html:"<h1 style='color:blue'>Hello With Mail</h1>",
    text: "testing of nodemailer"
} 

trans.sendMail(mailOptions, function (err, info) {
    if (err) {
        console.log("Error occurred:", err.message)
    } else {
        console.log("Email sent successfully!", info.response)
    }
})