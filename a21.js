// write node js script to hendel events has asked below 
// 1.check the redius is nagative or not if nagative then display massage redius must be positive else display
// peramiter of circle
// 2. the side is nag or not if nag then display massage side is positive else display perameter of square 



const e=require("events")
const ee=new e()

ee.on("negrad",()=>{
    console.log("radius must be positive")
})
ee.on("negside",()=>{
    console.log("side must be positive")
})
ee.on("eval",(r,s)=>{
    if(r<0){
        ee.emit("nagrad")
    }
    else{
        cr=2*3.14*r
        console.log("radius of circle :", cr)
    }
    if(s<0){
        ee.emit("nagside")
    }
    else{
        sr=4*s
        console.log("perimiter of square", sr)
    }})
    ee.emit("eval",10,5)
