// Task6:
// Create react app which contains form with fields Name, Email Id, Password and Confirm Password and submit button. 
// 1.	When the form submitted the values of password and confirm password fields must be same else it will give an error message in alert box.  
// 2.	Also, length of the password must be greater than 8 else it will give an error message in alert.
// 3.	If form submitted successfully then display entered name and email id in alert box.


import { useState } from "react";

function T6(){
    const [formdata,setFormdata]=useState({})
    function handleChange(e){
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault()
        if(formdata.pass!==formdata.cpass){
            alert("Password fields must be same")
        }
        else if(formdata.pass.lenght<=8){
            alert("password must be greater than 8 ")                
        }
        else{
             alert("your form has been submitted . \n Name : "+ formdata.fname + "\n Email : "+formdata.eid+ " \n City : "+ formdata.city + "\n Gender : "+ formdata.gen)
        }
        
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
export default T6


