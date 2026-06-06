import { useReducer } from "react";

function UR7(){

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

export default UR7