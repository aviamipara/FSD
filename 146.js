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

app.get("/contact",function(req,res){
    res.set("Content-type","text/html")
    res.write("<h1>Welcome to contact Page</h1>")
    res.send()

})

app.get("/temp",function(req,res){
    res.set("Content-type","text/html")
    res.write("<h1>Welcome to temp Page</h1>")
    res.send()

})
app.listen(7575)