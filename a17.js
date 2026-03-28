// for passing perameter

const e1=require("events")
const ee1=new e1()
function fun(a,b){
    console.log("Hello "+a+b)
}
ee1.on("starts",fun)
ee1.emit("starts",20,26)