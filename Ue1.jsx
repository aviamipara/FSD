//     useEffect hook

// Syntax


//   useEffect(function,dependancy)


import { useState,useEffect } from "react";
function UE1(){
    const [countA,setCountA]=useState(0)
    const [countB,setCountB]=useState(0)
    function handleA(){
        setCountA(countA+1)
    }
    function handleB(){
        setCountB(countB+1)
    }
    // useEffect(()=>{
    //     alert("Clicked")
    // })

    // useEffect(()=>{
    //     alert("Clicked")
    // },[])

    // useEffect(()=>{
    //     alert("Clicked")
    // },[countA])

    useEffect(()=>{
        alert("Clicked")
    },[countA,countB])
    return(<>
      <button onClick={handleA}> A {countA}</button>
      <button onClick={handleB}> B {countB}</button>
    </>)
}

export default UE1