// Asynchronous

// Syntax :

//   1.to create file/ write in file
//      fs.writeFile(file name ,data, callback (cb))

var fs=require("fs")
fs.writeFile("user4.txt","Hello",(err)=>{
             if(err) throw err 
             console.log("write in file successfuly")})

//   2.to add in file 
//      fs.append(file name ,data,callback)

fs.appendFile("user4.txt","World",(err)=>{
    if(err) throw err 
    console.log("add in file successfuly")})

//   3.to copy file
//       fs.copyFile(Source,dest,call back)

fs.copyFile("user4.txt","user5.txt",(err)=>{
    if(err) throw err 
    console.log("copy successfuly")})

//   4.to rename file
//       fs.rename(filename,new name, callback)

fs.rename("user.txt","user1.txt",(err)=>{
    if(err) throw err 
    console.log("Rename successfuly")})


//   5.to delete file
//       fs.unlink(filename, callback)

fs.unlink("user5.txt",(err)=>{
    if(err) throw err 
    console.log("delete successfuly")})
