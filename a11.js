
//    8.to read a file
//       fs.rmdir(folder name, callback)

var fs=require("fs")
fs.readFile("user2.txt","utf-8",(err,data)=>{
    if(err) throw err 
    console.log(data)})
