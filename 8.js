var expr=require("express")
var app=expr()

app.use(expr.urlencoded())

const cp=require("cookie-parser")
app.use(cp())

app.use(expr.static("../public",{index:"8.html"}))
app.post("/next",(req,res)=>{
    res.set("content-type","text/html")
    res.cookie("Firstname",req.body.fname)
    res.cookie("Lastname",req.body.lname)
    res.cookie("Password",req.body.pwd)
    res.redirect("/admin")
})


app.get("/admin",(req,res)=>{
    res.clearCookie("Lastname")
    res.write("Welcome "+req.cookies.Firstname)
    res.write(" your Password is  "+req.cookies.Password)
    res.send()
})
app.listen(8082)