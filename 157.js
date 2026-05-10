// Write an ExpressJS to take a UserName, Password, Textarea for
// “message” & submit
// button using get method.
// 1) After clicking submit button the content of submitted details
// should be represented on “/login” page along with one “show vowel”
// link.
// 2) By clicking “show vowel” link count of vowel used in submitted
// “message” will display on “/message” page. (Use next() to route
// page)

const express = require("express")
const app = express()

app.use(express.static(__dirname , {index : "PB157.html"}))

app.get("/login" , (req , res) => {
    const uname = req.query.name
    const pass = req.query.pass
    const msg = req.query.msg

    res.type("text/html")

    res.write(`<h3>Username : ${uname}</h3>`)
    res.write(`<h3>Password : ${pass}</h3>`)
    res.write(`<h3>Message : ${msg}</h3>`)
    res.write(`<a href="/message">Show Vowel</a>`)
    res.send()
})

const count = (req , res , next) => {
    var c = 0
    const msg = String(req.query.msg)
    const vowels = ['a' , 'e' , 'i' , 'o' , ' u' , 'A' , 'E' , 'I' , 'O' , 'U']

    for (i in msg) {
        if (vowels.includes(msg[i])) {
            c++
        }
    }

    req.count = c
    next()
}

app.get("/message" , count , (req , res) => {
    res.send(`The count of vowels are ${req.count}`)
})

app.listen(3000)
