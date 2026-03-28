var pm=require("path")
var a="D:/LJ/abc.html"

var fs=require("fs")
fs.mkdirSync(pm.dirname(a))
if(pm.extname(a)==".txt"){
    fs.writeFileSync(a,"This is text file")
}
else{
    fs.writeFileSync(a,`<h1 style="color:blue">this is html file</h1>`)
}