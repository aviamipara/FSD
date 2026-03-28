// Syntax :

//  res.write(Status,{"Cantent.Type":mine})  - this line is always in first position

// mime type

//  text -> text/plain
//  html -> text/html
//  json -> application/json
//  jpg -> image/jpg
//  css -> text/css

var http=require("http")
const { text } = require("stream/consumers")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write("Hi")
    res.write("<h1>Hello world</h1>")
    res.end()
}).listen(9000)
