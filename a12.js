//  write a node js script  write text "you are creating a file" to help.txt file after that 
//  add data "new" to the same file after that read the data from file and print in console 
//  after finifshing read operation print thank you in console write append read sequnce must 
//  be maintain all this operations are asyncronous.

var fs=require("fs")
fs.writeFile("help.txt","you are creating a file",(err)=>{
    if(err) throw err 
    console.log("write in file successfuly")
   
fs.appendFile("help.txt"," new",(err)=>{
    if(err) throw err 
    console.log("add in file successfuly")


fs.readFile("help.txt","utf-8",(err,data)=>{
    if(err) throw err 
    console.log(data)
    console.log("thank you")})})})

    