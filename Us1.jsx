import {useState} from 'react'
function us1(){
    const [count,setCount]=useState(0)
    function handleClick(){
        setCount(count+1)
    }
    return(<div>
        <h1>{count}</h1><br/>
        <button onClick={handleClick}>Click here</button>
    </div>)
}
export default us1

