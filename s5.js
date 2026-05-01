const expr=require("express")
const app=expr()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("first")
})
app.listen(9096)

