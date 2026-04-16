// http://localhost:8005/name/Aviraj
var expr = require("express")
var app=expr()
app.get("/name/:uname",(req,res)=>{

    res.send(req.params)
})
app.listen(8005)

// {"uname":"Aviraj"}
