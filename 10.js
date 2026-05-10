const e = require("express")
const expr=require("express")
const app=expr()
const es=require("express-session")

app.use(expr.urlencoded())

app.use(expr.static("../public",{index:"10(1).html"}))

app.use(es({
    secret:"abc",
    resave :false,
    saveUninitialized:false
}))

app.post("/login",(req,res)=>{
    req.session.username=req.body.uname
    res.redirect("/10(2).html")
})

app.post("/order",(req,res)=>{
    req.session.product=req.body.product
    req.session.quantity=req.body.quantity
    res.redirect("/details")
})

app.get("/details",(req,res)=>{
    res.write(`<h1>Welcome</h1> <br> 
               Your Name is ${req.session.username} <br>
               Product is ${req.session.product} <br>
               Quantity is ${req.session.quantity} <br>`)
})

app.listen(9099)