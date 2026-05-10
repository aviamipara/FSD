// res.sendFile(path of file)

var expr=require("express")
var app=expr()
var path=require("path")
var sp=path.join(__dirname,"../public")
app.get("/",(req,res)=>{
    res.sendFile(sp+"/3.html")
})
app.use(expr.static("../public")) // - for css file link
app.listen(9090)
