
// Create a react app using function component to display image of flower  
// using AXIOS to make API request. Use API Url 
// (https://flower.ceo/api/image/random). Key name in API which store image 
// is “sample”


import { useState,useEffect } from "react";
import axios from 'axios';

function PB375(){
    const [myimg,setMyimg]=useState("")
    useEffect(()=>{
        setInterval(()=>{
            axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((response)=>{
                console.log(response.data)
                setMyimg(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        },2000)
    },[])

    return(<>
     <img src={myimg.message} alt="no image"  height="300px"  width="300px" />
    </>)
}

export default PB375