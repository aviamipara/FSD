// app.method(URL,request listener function)
/*

Method

get
post
put
delete
all

*/


/* Method to ser headers

res.set("Content-type",mime type)
res.type(mime type)

*/


var expr = require("express")
var app=expr()
app.get("/",function(req,res){
    res.set("Content-type","text/plain")
    res.write("Hello to the person ")
    res.send(" who bunk 4 days and 2 lectures")

})
app.listen(8080)