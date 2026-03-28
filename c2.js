process.noDeprecation=true
var fs=require("fs")
url=require("url")

var addr="https://localhost:8080/abc.txt?Year=2026&month=feb"

var q=url.parse(addr,true)
console.log(q)

y=q.query.Year

if((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
    console.log("This is leap year")
}
else{
    console.log("This is not  leap year")
}



var q1=url.parse(addr)
fs.writeFile("url1.txt",q1.query,(err)=>{
             if(err) throw err 
             console.log("write in file successfuly")})
