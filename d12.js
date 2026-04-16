// post - Form data is sent within the HTTP request body, not the URL (for security)

// http://localhost:9292/about

var expr = require("express")
var app=expr()
app.use(expr.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send(`<form method="post" action="/about">
              <input type="text" name="uname">Name<br>
              <input type="password" name="pwd">Password<br>
              <input type="submit">
              </form>`)
})

app.post("/about",(req,res)=>{
    res.send("Welcome "+req.body.uname +" your password is "+req.body.pwd)
})
app.listen(9292)