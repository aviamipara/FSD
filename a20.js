// write a node js script to create two listeners for a common event print no of events associated with an emitter
// remove one of the listeners and call remaining listener again also print no of remaining listener.

const e=require("events")
const ee=new e()
function fun(){
    console.log("Hello")
}
function fun1(){
    console.log("Hello1")
}

ee.addListener("start",fun)
ee.addListener("start",fun1)

var c=ee.listenerCount("start")
console.log(c)


ee.removeListener("start",fun)
ee.emit("start")

var c1=ee.listenerCount("start")
console.log(c1)