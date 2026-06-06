//                           UseReducer
// Syntax:

// const [state,dispatch] = useReducer(reducer function,initialState)

// write react component to inc value by 5 while clicking on button initialize value with 20 use reducer hook to perform the task 

import { useReducer } from "react";

function UR6(){
    const [state,dispatch] = useReducer(reducer,20)
    function reducer(state,action){
        return state + action
    }
    return(<>
    <button onClick={()=> dispatch(5)} >Add</button><br />
    <h1>{state}</h1>
    </>)
}

export default UR6

