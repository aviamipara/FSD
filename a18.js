//aenonimus function
const e=require("events")
const ee=new e()

ee.on("start",()=>{
    console.log("Hello")
     })
ee.emit("start")



const e1=require("events")
const ee1=new e1()

ee1.on("start",(a,b)=>{
    console.log("Hello" +a+b)
     })
ee1.emit("start",10,20)



const e2=require("events")
const ee2=new e2()
ee2.emit("start")
ee2.on("start",()=>{
    console.log("Hello")
     })

