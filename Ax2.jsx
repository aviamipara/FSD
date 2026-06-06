//  Axios

//  Syntax:


// axios
//  .get(url)
//  .then((response)=>{   })
//  .catch((err)=>{   })

    import { useState,useEffect, use } from "react";
    import axios from 'axios';
    
    function AX2(){
        const [myimg,setMyimg]=useState("")
     function fatchImg(){  
                axios
                .get("https://dog.ceo/api/breeds/image/random")
                .then((response)=>{
                    console.log(response.data)
                    setMyimg(response.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
    }
    useEffect(fatchImg,[])
    
        return(<>
         <img src={myimg.message} alt="no image"  height="300px"  width="300px" />
         <button onClick={fatchImg}>Change Image</button>
        </>)
    }
    
    export default AX2