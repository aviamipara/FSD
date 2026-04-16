var expr = require("express")
var app=expr()
var a = {name:"abc",age:19}
app.get("/",function(req,res){
    // res.set("Content-type","application/json")
    res.type("application/json")
    res.json(a)

})
app.listen(8002)