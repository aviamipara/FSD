
//   Core module
  
//                          1.File System module
//                                  |
//                                  |
//             -----------------------------------------------
//             |                                             |
//         Synchronous                                   Asynchronous
//         (blocking)                                    (non blocking)

// node -v
// version 24.14.0


//                  CRUD

//     syntax :

//              1. to use any module
                
//                  variablename=require("modulename")

var ps=require("fs")
const { stringify } = require("querystring")

//              2.to write / create a file
                
//                 fs.writeFileSync(file name,data in string)

ps.writeFileSync("user.txt","Hello") // when i write on file it overwrite

//              3.to append string

//                 fs.appendFileSync(file name,data in string)

ps.appendFileSync("user.txt","\nWorld") // write in last

//              4.to read data from file

//                 fs.readFileSync(file name , "utf-8")
//                                              optinal

//                 console.log(data.toString())

let data=ps.readFileSync("user.txt","utf-8")
console.log(data)

let data1=ps.readFileSync("user.txt")
console.log(data1.toString())

//              5.to rename a file

//                 fs.renameSync(existingname,new name)

ps.renameSync("user.txt","user2.txt")

//              6.to copy a file

//                 fs.copyFileSync(source,dest)

ps.copyFileSync("user2.txt","user3.txt")

//              7.to delete a file

//                fs.unlinkSync(file name)
ps.unlinkSync("user3.txt")

ps.writeFileSync("user.txt","") // for clean the file

//              8.to create a folder(directory)

//                fs.mkdirSync(folders name)

//ps.mkdirSync("fsd")
ps.writeFileSync("fsd/a.html","<h1>Hello</h1>")


//             9.to delete a folder

//                fs.rmdirSync(folder name)

ps.unlinkSync("fsd/a.html")
ps.rmdirSync("fsd")