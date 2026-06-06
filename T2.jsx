
// Write a program having a button “show”. By clicking a button, it will display text and button text will be changed as “Hide”. 
// By clicking Hide button, the text will be disappeared and button text will become “show” again.




import { useState } from "react";

function T2(){
    const[txt,setTxt]=useState("")
    const[btnTxt,setBtnTxt]=useState("show")

    function handleClick(){
        if(btnTxt=="show"){

            setBtnTxt("Hide")
            setTxt("Hello")

        }else{

            setBtnTxt("show")
            setTxt("")
        }
    }
    return(<div>
        <button onClick={handleClick}>{btnTxt}</button>
        <h1>{txt}</h1>
    </div>)
}
export default T2