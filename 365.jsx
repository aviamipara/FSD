//  Write a ReactJS script to create a digital clock running continuously. 
// (useEffect)


import { useState,useEffect } from "react";
function PB365(){
    const [data,setData]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setData(new Date())
        },1000)
    },[])
    return(<>
      <h1> Current Time is {data.toLocaleTimeString()}</h1>

      <h2>Hours : {data.getHours()}</h2>
      <h2>Minites : {data.getMinutes()}</h2>
      <h2>Seconds : {data.getSeconds()}</h2>
    </>)
}

export default PB365