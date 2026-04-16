var expr = require("express")
var app=expr()
var a = {name:"abc",age:29}
app.get("/",function(req,res){
    // res.set("Content-type","application/json")
    res.type("application/json")
    res.write(a.age+" ")
    res.send()
})
app.listen(8004)