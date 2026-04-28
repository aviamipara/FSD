const e = require("express")
var expr=require("express")
var app=expr()
app.use(expr.static("../public",{index:"203.html"}))
app.get("/calc",(req,res)=>{
    res.set("content-type","text/html")
    n1=parseInt(req.query.n1)
    n2=parseInt(req.query.n2)
    if((n1>0) && (n2>0)){
        if(req.query.formula == "add"){
            a=n1+n2
            res.write("Addition :"+ a)
        }else if(req.query.formula == "sub"){
            b=n1-n2
            res.write("Subtraction :"+ b)
        }else if(req.query.formula == "mul"){
            c=n1*n2
            res.write("Multiplication :"+ c)
        }else if(req.query.formula == "div"){
            d=n1/n2
            res.write("Division :"+ d)
        }else{
            res.write("You have not selected any formula")
        }
    }else{
        res.write("Please enter the valid number")
    }

    res.send()
})
app.listen(9092)
