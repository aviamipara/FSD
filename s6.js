const expr=require("express")
const app=expr()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("first",{id:"abc123"})
})
app.listen(9097)

