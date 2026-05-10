var expr=require("express")
var app=expr()
app.use(expr.static("../public",{index:"4.html"}))
app.get("/process_get",(req,res)=>{
    res.set("content-type","text/html")
    msg=req.query.massage
    msg=msg.split(".")
    for(i in msg){
        res.write(msg[i]+"</br>")
    }
    res.send()
})
app.listen(9091)
