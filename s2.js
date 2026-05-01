const expr=require("express")
const app=expr()
const multer=require("multer")
app.use(expr.urlencoded())
app.use(expr.static("../public",{index:"p2.html"}))

var store=multer.diskStorage({
    destination:"fsd",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload=multer({storage:store})

app.post("/submit",upload.array("mydoc",5),(req,res)=>{
    res.set("Content-type","text/html")
    file=req.files
    if(file){
        for(i of file){
            res.write("<h1>Your File named <span style='color:red'>"+i.originalname 
                +"</span>has been upload to </h1>")
        }
        res.send()
    }
  
})

app.listen(8094)