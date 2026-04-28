const expr=require("express")
const app=expr()

const cp=require("cookie-parser")
app.use(cp())

app.get("/cookie",(req,res)=>{
    res.cookie("fname","Express")
    res.cookie("lname","JS")
    res.cookie("ID",2)
    res.cookie("email","abc@gmail.com")

    res.clearCookie("fname")

    res.send(req.cookies)
})

app.listen(8080)