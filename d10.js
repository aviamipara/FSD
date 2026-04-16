//http://localhost:9090/about?name=Aviraj&id=0001

var expr = require("express")
var app=expr()
app.get("/about",(req,res)=>{
    res.send(req.query)
})
app.listen(9090)

// {"name":"Aviraj","id":"0001"}