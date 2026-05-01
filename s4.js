const expr=require("express")
const app=expr()
const nodemailer = require("nodemailer")
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"p4.html"}))

app.post("/login",(req,res)=>{
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
        to: req.body.eid,
        subject: "Response as Mail",
        html:`<h1 style='color:blue'>${req.body.eid}</h1>`,
        text: "testing of nodemailer"
    } 
    
    trans.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log("Error occurred:", err.message)
        } else {
            console.log("Email sent successfully!", info.response)
        }
    })
    res.send()
})
app.listen(8080)