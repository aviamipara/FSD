// Middleware

     
/*
 Syntext :

        app.use(route,middleware function)
                  |
                optional  

        app.method(route,middleware1,middleware2,.....,(req,res)=>{
        
            })

        -- in middleware function (req,res,next)
        
*/

var expr = require("express")
var app=expr()

const addName=(req,res,next)=>{
    req.name="abc"
    console.log("Name added")
    next()
}

const addCol=(req,res,next)=>{
    req.col="LJU"
    console.log("College added")
    next()
}

const addMarks=(req,res,next)=>{
    req.marks=50+40
    console.log("Marks added")
    next()
    //res.send("The end")
}

app.get("/class",addName,addCol,addMarks,(req,res)=>{
    res.send("Welcome "+ req.name +" to "+ req.col +" your scored "+ req.marks)
})
app.listen(9494)
// http://localhost:9494/class