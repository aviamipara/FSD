const { log } = require("console")
var expr=require("express")
var app=expr()
var path=require("path")
var sp=path.join(__dirname,"../public")
app.get("/",(req,res)=>{
    res.sendFile(sp+"/1.html")
})
app.listen(8085)

// app.use(expr.static(__dirname)) -- by default index.html is linked
// app.use(expr.static("public"))  --l


// sp=path.join(__dirname,"../public")
// console.log(path.join(__dirname,"..")) - for go to main file CH-5
// app.use(expr.static(sp,{index:"2.html"})) - for othre file 


// app.use(expr.static("../img"))
// app.use(expr.static("../public",{index:"2.html"}))

// console.log(__dirname)

// app.listen(3004)
