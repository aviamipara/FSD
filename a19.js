// 2nd method  -- to create event 

//         ee.addListener(eventname , handler)

const e=require("events")
const ee=new e()
function fun(){
    console.log("Hello")
}
function fun1(){
    console.log("Hello1")
}

ee.addListener("start",fun)
ee.on("start",fun1)
//ee.emit("start")


//  -- to remove/unbind a listener

//       ee.removeListener(eventname , listener)

ee.removeListener("start",fun)
//ee.emit("start")

//   -- to remove all listener / to delete on event

//        ee.removeAllListener(eventname)

ee.removeAllListeners("start")
ee.emit("start")


//   -- to count no of listeners bind with event

//        ee.ListenerCount(eventname)

var c=ee.listenerCount("start")
console.log(c)
ee.emit("start")