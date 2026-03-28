// Syntax :

//   -- to use on event module

//        e=require("events")
//        ee=new e()

//   -- to create on event & bind with handler

//        ee.on(eventname,handler)

//   -- to trigger (fire on event)

//    rr.emit(eventname)

const e=require("events")
const ee=new e()
function fun(){
    console.log("Hello")
}
ee.on("start",fun)
ee.emit("start")


