var expr=require("express")
var app=expr()
app.use(expr.urlencoded()) // change
app.use(expr.static("../public",{index:"5.html"}))

app.post("/process_post",(req,res)=>{  // change process_post
    res.set("content-type","text/html")
    n1=req.body.fname  // change  body
    n2=req.body.lname

    res.write("Welcome " + n1 + n2)
    res.send()
})
app.listen(9094)