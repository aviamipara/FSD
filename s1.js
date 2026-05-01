const expr=require("express")
const app=expr()
const multer=require("multer")

app.use(expr.static("../public",{index:"p1.html"}))

var store=multer.diskStorage({
    destination:"Lju",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

var upload=multer({storage:store})

app.post("/data",upload.single("mypic"),(req,res)=>{
    var file=req.file
    if(file){
        res.send("<h1>Your File named <span style='color:red'>"+file.originalname 
                 +"</span>has been upload to "+file.destination+"</h1>")
    }
})

app.listen(8093)