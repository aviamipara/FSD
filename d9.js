const mg=require("mongoose")
var expr=require("express")
var app=expr()
mg.connect("mongodb://127.0.0.27017/val4")
.then(()=>{console.log("success")})
.catch((err)=>{console.log(err)})

mg.pluralize(null)

const users=new mg.Schema(
    {
        username:String,
        password:String,
        cpassword:String,

    }
)

const user=mg.model("user",users)
app.use(expr.static(__dirname,{index:"form1.html"}))
app.get("/process_get",(req,res)=>{
    const newUser=new user({
        Username:req.query.uname,
        Password:req.query.pwd,
        cPassword:req.query.cpwd
    })
    if(password===cpassword)
    {
        newUser.save()
        res.send("saved")
    }
    else
    {
        console.log("password must be not same")
    }
})
app.listen(8001)