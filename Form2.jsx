//                   React Form

import { useState } from "react";

function Form2(){
    const [formdata,setFormdata]=useState({})

    function handleChange(e){
        setFormdata({...formdata,[e.target.name] : e.target.value})
    }

    
    function handleSubmit(e){
        e.preventDefault()
        if(formdata.ck=="on"){
            alert("Thnak you for subscribe "+ formdata.uname)
        }else{
            alert("Please subscribe  " + formdata.uname)
        }
       
    }
    return(<form onSubmit={handleSubmit}>
        <input type="text"  name="uname" onChange={handleChange}/> 
        <input type="email"  name="eid" onChange={handleChange}/> 
        <input type="checkbox"  name="ck" onChange={handleChange}/> Subscribe
        <input type="submit" />
    </form>)

}
export default Form2