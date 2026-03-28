//  create a server of a web page having tow pages home and about when user open home page display welcome to home page.
//  when user about page display welcome to about page if user open any other page display page not found.

var http=require("http")
var fs=require("fs")

http.createServer(function(req,res){
   if(req.url=="/"){
    res.write("welcome to home page")
    res.end()
   }
   else if(req.url=="/about"){
    var a=fs.readFileSync("a.jpg")
    res.writeHead(200,{"Content-Type":"image/jpg"})
    res.end(a)
   }
   else{
    res.write("page not found")
    res.end()
   }
}).listen(8090)