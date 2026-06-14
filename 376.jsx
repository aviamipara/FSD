
// Create a Student Data Entry Form using React. Fields are Student Name 
// (input Field), Gender (Radio Button values are Boy, Girl), Subjects 
// (Dropdown values are English, Gujarati), Comments (textarea). When the 
// user Click on the Submit button , it will display an alert and use useState 
// hook.


import { useState } from "react";

function PB376(){
    const [name,setName]=useState("")
    const [gender,setGender]=useState("Boy")
    const [sub,setSub]=useState("Boy")
    const [txt,setTxt]=useState("")


    function handleChange(e){
        setName(e.target.value)
    }

    function handleChange1(e){
        setGender(e.target.value)
    }
    function handleChange2(e){
        setTxt(e.target.value)
    }
    function handleChange3(e){
        setSub(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        alert("Name :" + name +"\n"
            +"Gender :"+ gender +"\n"
            +"Subject :"+ sub +"\n"
            +"Comment :"+ txt
        )
    }

    
    


    return(<form onSubmit={handleSubmit}>
        Name :<input type="text" onChange={handleChange}/><br />
        Gender :
        Boy <input type="radio" name="m" onChange={handleChange1} value="Boy"/>
        Girl <input type="radio" name="m" onChange={handleChange1} value="Girl"/><br />
        Comment : <textarea onChange={handleChange2}/><br />
        Subject : <select onChange={handleChange3}>
            <option value="english">ENG</option>
            <option value="gujarati">GUJ</option>
        </select><br />

        <input type="submit" onSubmit={handleSubmit}/>
    </form>)


    
}
export default PB376