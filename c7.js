var http=require("http")
http.createServer(function(req,res){
    console.log(req)
    res.end(req.url)
}).listen(8082)