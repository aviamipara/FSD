// Create React Js app to perform the tasks as asked below.-Add button "Click"-By clicking on button the value should be incremented by 5. Initial value is 
// 20.-Use useReducer hook to perform the above tasks.


import { useReducer } from "react";

function PB372(){

    const [num  ,dispatch] = useReducer(reducer,20)
    function reducer(num,action){
        if(action.type=="inc"){
            return num+5
        }
    }

    return(<>
    <h1>{num}</h1><br />
    <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
    </>)
}

export default PB372