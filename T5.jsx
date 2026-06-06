// Task5:
// Create react app which contains form with following fields.
// •	First Name(Input type text)
// •	Email(Input type email)
// •	Password(Input type password)
// •	Confirm Password(Input type password)
// •	Message (Textarea)
// •	Gender(Radio Button)
// •	City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)

import { useState } from "react";

function T5(){
    const [formdata,setFormdata]=useState({})
    function handleChange(e){
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("your form has been submitted . \n Name : "+ formdata.fname + "\n Email : "+formdata.eid+ " \n City : "+ formdata.city + "\n Gender : "+ formdata.gen)
    }

    return(<form onSubmit={handleSubmit}>
        <input type="text" name="fname" onChange={handleChange}/> Name <br />
        <input type="email" name="eid" onChange={handleChange}/> Email <br />
        <input type="password" name="pass" onChange={handleChange}/> Password <br />
        <input type="password" name="cpass" onChange={handleChange}/> Conform Password <br />
        <textarea name="msg" onChange={handleChange}></textarea> <br />
        <select name="city" onChange={handleChange}>
            <option value="Ahm">Ahmedabad</option>
            <option value="Ank">Ankleshwer</option>
            <option value="Gnr">Gandhinager</option>
        </select>
        <input type="radio" name="gen" value="male" onChange={handleChange} /> Male
        <input type="radio" name="gen" value="female" onChange={handleChange} /> FeMale
        <input type="submit" />
    </form>)
}
export default T5


