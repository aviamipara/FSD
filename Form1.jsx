//                   React Form

import { useState } from "react";

function Form1(){
    const [txt,setTxt]=useState("")
    const [car,setCar]=useState("Creta")


    function handleChange(e){
        setTxt(e.target.value)
    }

    function handleChange1(e){
        setCar(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        alert("You have entered : "+ txt + "\n" + "Car : "+ car)
    }

    
    


    return(<form onSubmit={handleSubmit}>
        <textarea onChange={handleChange}/>
        <select onChange={handleChange1}>
            <option value="Creta">CRETA</option>
            <option value="Kia">KIA</option>
            <option value="BMW">BMW M-5</option>
            <option value="Dodge">DODGE</option>
        </select>
        <input type="submit" />
    </form>)


    
}
export default Form1
