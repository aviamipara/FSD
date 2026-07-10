const mg=require("mongoose")
var expr=require("express")
var app=expr()
mg.connect("mongodb://127.0.0.1:27017/con1")
           .then(()=>{console.log("success")})
           .catch((err)=>{console.log(err)})

mg.pluralize(null)

const mySchema=new mg.Schema({
    Username:String,
    Password:String
})

const user=mg.model("user",mySchema)

app.use(expr.static(__dirname,{index:"form.html"}))
app.get("/process_get",(req,res)=>{
    const newUser=new user({
        Username:req.query.uname,
        Password:req.query.pwd,
    })
    newUser.save()
    res.send()
})
app.listen(8085)