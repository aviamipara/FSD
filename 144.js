const e = require("express")
var expr=require("express")
var app=expr()
app.use(expr.urlencoded()) // change
app.use(expr.static("../public",{index:"144.html"}))

app.post("/check",(req,res)=>{  // change process_post
    res.set("content-type","text/html")
    n1=req.body.uname 

    if (n1=="admin"){
        res.send("Welcome admin")
    }else{
        res.send(`Please login with admin name  <a href="/">Try Again</a>`)
    }

})
app.listen(9095)