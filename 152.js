// Write an ExpressJS to take a textarea & submit button. After clicking
// submit button the content of textarea should be represented on next
// page by writing each sentence (separated by dot) in new line.


const express = require("express")
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname , {index : "152.html"}))

app.post("/submit" , (req , res) => {
    const text = req.body.text

    res.type("text/html")

    arr = text.split(".")
    console.log(arr)
    
    for (i in arr) {
        res.write(arr[i] + "</br>")
    }
    res.send()
})

app.listen(3000)