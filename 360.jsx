//  Write a program to build React app having text and button to show and 
// hide the text. 


import  { useState } from 'react';

function PB360() {
  const [Txt, setTxt] = useState("ReactJS Hook");
  const [btn, setBtnTxt] = useState("Hide");

   function showHide(){
        if(btn=="Hide"){

            setTxt("")
            setBtnTxt("show")

        }else{
            setTxt("ReactJS Hook")
            setBtnTxt("Hide")
           
        }
    }

  return (
    <div>
      <h2>Show/Hide Text Example</h2>
      <h2>{Txt}</h2>
      <button onClick={showHide}>{btn}</button>
    </div>
  );
}

export default PB360