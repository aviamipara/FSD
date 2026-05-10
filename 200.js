var expr=require("express")
var app=expr()

app.use(expr.urlencoded())

const cp=require("cookie-parser")
app.use(cp())

app.use(expr.static("../public",{index:"200.html"}))
app.get("/submit-feedback",(req,res)=>{
    res.set("content-type","text/html")
    feedback=req.query
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send(`Thank you for your feedback <a href='feedback-details'>Show Feedback</a>`)
})

app.get("/feedback-details",(req,res)=>{
    feedback=req.cookies.feedback
    if(feedback){
        res.send(`<h1>Feedback Details </h1>
                 <h3>Name:</h3>${feedback.name} <br>
                 <h3>Email:</h3>${feedback.email} <br>
                 <h3>Massage:</h3>${feedback.massage} <br>
                 <h3>Rating:</h3>${feedback.rating} <br>
                 <a href="/">Logout</a>`)
    }else{
        res.send("No Feedback Aveilable")
    }
})

app.listen(8083)

