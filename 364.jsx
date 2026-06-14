// Create a program to build React app having buttons to increment and 
// decrement the number by clicking that respective button. Also, increment of 
// the number should be performed only if number is less than 10 and 
// decrement of the number should be performed if number is greater than 0.



import {useState} from 'react'
function PB364(){
    const [count,setCount]=useState(5)
    function handleClick(){
        if(count < 10){
            setCount(count+1)
        }
    }
    function handleClick1(){
        if(count >0){
            setCount(count-1)
        }                                               
    }
    return(<div>
        <h1>{count}</h1><br/>
        <button onClick={handleClick}>Click here to INC</button><br />
        <button onClick={handleClick1}>Click here to DEC</button>
    </div>)
}
export default PB364

