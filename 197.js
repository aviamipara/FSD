const e = require("express")
var expr=require("express")
var app=expr()


const es=require("express-session")
app.use(expr.static("../public",{index:"197.html"}))
app.use(es({
    secret:"LJU",
    resave :false,
    saveUninitialized:false
}))

app.get("/savesession",(req,res)=>{
    req.session.username=req.query.uname
    req.session.pass=req.query.pwd
    res.redirect("/fetchsession")
    
})
app.get("/fetchsession",(req,res)=>{
    res.write("<h1>Welcome</h1> "+ req.session.username)
    res.write("<h1>Your Password is</h1> <br>"+ req.session.pass)
    res.write("<a href='/deletesession'>Logout</a>")
    res.send()
})

app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})

app.listen(9099)