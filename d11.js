// Query Perameters


// get  - Data is appended to the URL as query parameters

//http://localhost:9191/about?uname=Aviraj&pwd=102102

var expr = require("express")
var app=expr()
app.get("/",(req,res)=>{
    res.send(`<form method="get" action="/about">
              <input type="text" name="uname">Name<br>
              <input type="password" name="pwd">Password<br>
              <input type="submit">
              </form>`)
})

app.get("/about",(req,res)=>{
    res.send("Welcome "+req.query.uname +" your password is "+req.query.pwd)
})
app.listen(9191)