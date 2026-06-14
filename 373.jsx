
//  Create a react app to generate random joke using AXIOS to make API 
// request



import { useState,useEffect } from "react";
import axios from 'axios';

function PB3373(){
    const [myjoke,setMyjoke]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://v2.jokeapi.dev/joke/Any?type=single")
            .then((response)=>{
                console.log(response.data)
                setMyjoke(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },2000)
    },[])

    return(<>
     <h5>{myjoke.joke}</h5>
    </>)
}

export default PB3373