// write node js script to create a folder named node create one file named write.txt having data "hello" append some 
//data to the same file  read data frome the file and display in console rename the file with write1.txt after that 
//delete the folder node all operation in sync method

var ps=require("fs")
ps.mkdirSync("node")
ps.writeFileSync("node/write.txt","Hello")

ps.appendFileSync("node/write.txt","  World")

let data1=ps.readFileSync("node/write.txt")
console.log(data1.toString())

ps.renameSync("node/write.txt","node/write1.txt")


 //ps.unlinkSync("node/write1.html")
//ps.rmdirSync("node")