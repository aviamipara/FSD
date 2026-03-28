// write node js script to hendel events to write data in file, add data in same file and read the file 
// and display data in console all this operation are async the sequence must be maintain by events. 

const e=require("events")
const ee=new e()
var fs=require("fs")
function fun(){
    fs.writeFile("event.txt","Hello",(err)=>{
        if(err) throw err 
        console.log("write in file successfuly")
        ee.emit("append")})
}

function fun1(){
    fs.appendFile("event.txt"," World",(err)=>{
        if(err) throw err 
        console.log("add in file successfuly")
        ee.emit("read")})
}

function fun2(){
    fs.readFile("event.txt","utf-8",(err,data)=>{
        if(err) throw err 
        console.log(data)})
}

ee.addListener("start",fun)
ee.on("start",fun1)
ee.on("start",fun2)
ee.emit("start")