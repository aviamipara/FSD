// Create React Js app to perform the tasks as asked below.-Add buttons "increment" and "decrement"-By clicking on increment button the value should be incremented by 1 and 
// by clicking on decrement button value should be decremented by 1.-Use useReducer hook to perform the above tasks.


import { useReducer } from "react";

function PB371(){

    const [num  ,dispatch] = useReducer(reducer,0)
    function reducer(num,action){
        if(action.type=="inc"){
            return num+1
        }
        else if(action.type=="dec"){
            return num-1
        }
    }

    return(<>
    <h1>{num}</h1><br />
    <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
    <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
    </>)
}

export default PB371