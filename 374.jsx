// Create react app to craete exam form. Fields are as under.
// Name -text,
// Email -email
// Password -password, 
// Gender-radio, 
// Exam date-datepicker,
// Exam center-dropdown)
// Use useState hook to save the state of the form. Also, add validation for the 
// email and password fields. Display submited values.


import { useState } from "react";

function PB374(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("Male")
    const [examDate,setExamDate]=useState("")
    const [examCenter,setExamCenter]=useState("A-Center")
    const [data , setData] = useState("")


    function handleChange1(e){
        setName(e.target.value)
    }
    function handleChange2(e){
        setEmail(e.target.value)
    }
    function handleChange3(e){
        setPassword(e.target.value)
    }
    function handleChange4(e){
        setGender(e.target.value)
    }
    function handleChange5(e){
        setExamDate(e.target.value)
    }
    function handleChange6(e){
        setExamCenter(e.target.value)
    }
    
    function handleSubmit(e){
        // console.log("here")
        e.preventDefault()
        // console.log("here")
        setData(
            <div>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>Password : {password}</p>
                <p>Gender : {gender}</p>
                <p>ExamDate : {examDate}</p>
                <p>ExamCenter : {examCenter}</p>
            </div>
        )
    }


    return(
    <>
    <form onSubmit={handleSubmit}>
        Name :<input type="text"  onChange={handleChange1}/><br />
        Email :<input type="email"  onChange={handleChange2}/><br />
        Password :<input type="password"  onChange={handleChange3}/><br />
        Gender :
        Male <input type="radio"  name="m" onChange={handleChange4} value="Male"/>
        FeMale <input type="radio" name="m"   onChange={handleChange4} value="Female"/><br />
        ExamDate : <input type="date" onChange={handleChange5} /><br />
        ExamCenter :<select onChange={handleChange6}>
            <option value="A-Center">A-Center</option>
            <option value="B-Center">B-Center</option>
            <option value="C-Center">C-Center</option>
            <option value="D-Center">D-Center</option>
        </select>
        <br />

        <input type="submit" onSubmit={handleSubmit}/>
    </form>
    
    <div>
        {data}
    </div>
    </>
)

    
}
export default PB374
