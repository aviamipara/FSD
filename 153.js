// Write an expressJS code which loads login.html file upon browsing
// localhost:3010. The Login.html file contains input for
// username,password and two checkboxes named remember and
// subscribe,on submitting the file it should go to /data page where
// username,password and selected checkboxes are pinted,in addition to
// that a logout button should be there,onclicking this button it should
// go back to home page “localhost:3010/”.(GET/POST any method can
// be used)[Write all necessary files code]


const express = require("express")
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname , {index : "PB153.html"}))

app.post("/data" , (req , res) => {
    const name = req.body.name
    const pass = req.body.pass
    const c1 = req.body.c1
    const c2 = req.body.c2

    res.send(`
        Name : ${name} , Password : ${pass} , Remember : ${c1} , SubScribe : ${c2}
        </br>
        <a type="button" href="/">Logout</a>
    `)

    res.send()
})

app.listen(3010)