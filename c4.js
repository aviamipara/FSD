// Syntax :

// require("http").createServer(function(req,.res)=>{ 
//    res.write()
//    res.end()  -> this is complsery on every page    
//      }).listen(port)

var http=require("http")
http.createServer(function(req,res){
    //res.write("Hello world")
    res.write("Hello1")
    res.write("Hello2")
    //res.end() multiple time end is throw error
    res.end("hi")
    //res.write("Hello3")  this is not possible  
}).listen(8010)

