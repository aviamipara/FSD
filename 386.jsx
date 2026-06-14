// Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state


import { useReducer } from "react";

function PB386(){

    const [num, dispatch] = useReducer(reducer, 0)
    
    function reducer(num, action){
        if(action.type == "inc"){
            return num + 1
        }
        else if(action.type == "dec"){
            if(num > 0){
                return num - 1
            }
            return num
        }
        return num
    }

    return(<>
        <h2>Product Quantity Manager</h2>
        <h1>Quantity: {num}</h1><br />
        <button onClick={() => dispatch({type: "inc"})}>ADD Item</button>
        <button onClick={() => dispatch({type: "dec"})}>Remove Item</button>
    </>)
}

export default PB386