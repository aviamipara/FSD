
//    7.to delete a folder
//       fs.rmdir(folder name, callback)
// when folder is empty then after this is delete

var fs=require("fs")
fs.rmdir("fsd",(err)=>{
    if(err) throw err 
    console.log("folder deleted successfuly")})
