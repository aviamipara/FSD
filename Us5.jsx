import { useState } from "react";
function US5(params) {
    const [data,setData]=useState({})
    function handleChange(e){
        const {name,value}=e.target
        setData({...data,[name]:value})
    }
    return(<div>
        <input type="text" name="fname" onChange={handleChange}/>
        <input type="text" name="lname" onChange={handleChange}/><br/>
        <h1>FirstName : {data.fname} </h1> <br />
        <h1>LastName : {data.lname} </h1>
    </div>)
    
}
export default US5