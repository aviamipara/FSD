
//   6.to make folder
//       fs.mkdir(foldername,callback)

var fs=require("fs")
fs.mkdir("fsd",(err)=>{
    if(err) throw err 
    console.log("folder created successfuly")})

