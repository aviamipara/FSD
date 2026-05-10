const express = require("express");
const app = express();

app.use(express.static(__dirname , {index : "163.html"}))

app.get("/submit" , (req , res) => {
    const name = req.query.name
    const age = req.query.age

    res.send(`Hello ${name}, your age is ${age}`);
});

app.listen(3000);