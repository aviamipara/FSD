var expr = require("express")
var app=expr()
var a = {name:"abc",age:19}
app.get("/",function(req,res){
    res.set("Content-type","application/json")
    res.write(JSON.stringify(a))
    res.send()

})
app.listen(8000)