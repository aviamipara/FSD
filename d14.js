/*
   develop a web app that stimulate a college class room entry system using middleware when a student 
   acceess /classroom 
   1.log that the student enter the class 
   2.verify wether the student has a velid id card if velid allow entry and display a welcome msg 
     if not then denind access
*/

var expr = require("express")
var app=expr()

const entrylog=(req,res,next)=>{
    console.log("student enter the class")
    next()
}

const checkID=(req,res,next)=>{
    const hasID=false
    //const hasID=true
    if(hasID){
        req.student="abc"
        console.log("ID is verified")
        next()
    }
    else{
        res.send("Access denied : No ID Card")
    }
}

app.use("/class",entrylog,checkID)
app.get("/class",(req,res)=>{
    res.send("Welcome "+ req.student+ " to the class")
})
app.listen(5050)