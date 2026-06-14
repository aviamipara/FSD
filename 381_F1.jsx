// Create react app which to perform following task using function
// component:
// •	Create one main file name F1.js & other 2 component files F2.js & F3.js.
// •	Main file contains form with following fields:
// o	First Name (Input type text)
// o	Last Name (Input type text)
// o	Message (Textarea)
// o	City (Dropdown)
// o	Gender (Radio Button)
// •	Pass values of all fields from F1.js file to F3.js file. And display all
// submitted values in alert box using useContext & useState hook.
// No need to write App.js file.

import { createContext , useState } from "react"
import F2 from "./381_F2"

const Value = createContext()


function F1() {
    const [fname , setFname] = useState("")
    const [lname , setLname] = useState("")
    const [msg , setMsg] = useState("")
    const [city , setCity] = useState("")
    const [gen , setGen] = useState("")
    const [value , setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setValue({fname : fname , lname : lname , msg : msg , city : city , gen : gen})
    }

    return (
        <>
            <Value.Provider value={value}>
                <form onSubmit={handleSubmit}>
                    First Name : <input type="text" onChange={(e) => {setFname(e.target.value)}}/>
                    <br /><br />
                    Last Name : <input type="text" onChange={(e) => {setLname(e.target.value)}}/>
                    <br /><br />
                    Message : <textarea onChange={(e) => {setMsg(e.target.value)}}></textarea>
                    <br /><br />
                    City : <select name="city" id="city" onChange={(e) => {setCity(e.target.value)}}>
                        <option value="Surat">Surat</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Vadodra">Vadodra</option>
                    </select>
                    <br /><br />
                    Male : <input type="radio" name="gen" value={"Male"} onChange={(e) => {setGen(e.target.value)}} />
                    Female : <input type="radio" name="gen" value={"Female"} onChange={(e) => {setGen(e.target.value)}} />
                    <br /><br />
                    <input type="submit" />
                </form>

                <F2 />
            </Value.Provider>
        </>
    )
}

export default F1
export { Value }