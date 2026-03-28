//  create a server of a web page having tow pages home and about when user open home page display welcome to home page.
//  when user about page display welcome to about page if user open any other page display page not found.

var http=require("http")
let obj={name:"abc",age:19}

http.createServer(function(req,res){
   if(req.url=="/"){
    res.write("welcome to home page")
    res.end()
   }
   else if(req.url=="/about"){
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write("welcome to about page")
    res.write("<h1>Hello world</h1>")
    res.write(JSON.stringify(obj))
    res.end()
   }
   else{
    res.write("page not found")
    res.end()
   }
}).listen(8089)