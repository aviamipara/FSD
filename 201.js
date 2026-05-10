const e = require("express")
var expr=require("express")
var app=expr()


const es=require("express-session")

app.use(es({
    secret:"LJU",
    resave :false,
    saveUninitialized:false
}))

app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`<h style="color:blue">You have visited the page ${req.session.page_views} times</h>`)
    }else{
        req.session.page_views=1
        res.send(`<h style="color:green">Welcome ! Thank you for visiting the website</h>`)
    }
})
app.listen(9096)
