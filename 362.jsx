// Write a program to build React app to perform the tasks as asked below.
// •	Add a button “Change Text”.
// •	Add “Hello” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “How are 
// you?” and vice versa. 


import  { useState } from 'react';

function PB362() {
  const [Txt, setTxt] = useState("Hello");

   function showHide(){
        if(Txt=="Hello"){

            setTxt("How are you")

        }else{
            setTxt("Hello")           
        }
    }

  return (
    <div>
      <h2>Show/Hide Text Example</h2>
      <h2>{Txt}</h2>
      <button onClick={showHide}>Change Txt</button>
    </div>
  );
}

export default PB362