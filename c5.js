var http=require("http")
http.createServer(function(req,res){
    res.write("Hi")
    res.write("<h1>Hello world</h1>")
    res.end()
}).listen(8080)
