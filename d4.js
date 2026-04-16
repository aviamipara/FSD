var expr = require("express")
var app=expr()

app.get("/",function(req,res){
    res.set("Content-type","text/plain")
    res.write("Welcome to Home Page")
    res.send()

})
app.get("/about",function(req,res){
    res.set("Content-type","text/html")
    res.write("<h1>Welcome to about Page</h1>")
    res.send()

})
app.listen(8081)