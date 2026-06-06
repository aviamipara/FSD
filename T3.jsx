
// Write a program to build React app to perform the tasks as asked below. 
// •	• Add three buttons “Change Text”, “Change Color”, “Hide/Show”. 
// •	• Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag. 
// •	• By clicking on “Change text” button text should be changed to “Welcome students” and vice versa. 
// •	• By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button. 
// •	• Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown. 


import { useState } from "react";

function T3(){
    const[name,setName]=useState("LJ University")
    const[sty,setSty]=useState("red")
    const[txt,setTxt]=useState("ReactJS Hook")
    const[btnTxt,setBtnTxt]=useState("Hide")

    function showHide(){
        if(btnTxt=="Hide"){

            setTxt("")
            setBtnTxt("show")

        }else{
            setTxt("ReactJS Hook")
            setBtnTxt("Hide")
           
        }
    }
    function changeName(){
        if(name=="LJ University"){

            setName("Welcome Student")

        }else{
            setName("LJ University")
        }
    }
    function changeColor(){
        if(sty=="red"){

            setSty("blue")

        }else{
            setSty("red")
        }
    }
    

    return(<div>
        <button onClick={showHide}>{btnTxt}</button>
        <button onClick={changeName}>Change Txt</button>
        <button onClick={changeColor}>Change Color</button>
        <h1 style={{color:sty}}>{name}</h1>
        <h2>{txt}</h2>
    </div>)
}
export default T3