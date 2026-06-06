import {useState} from 'react'
function us2(){
    const [count,setCount]=useState(10)
    return(<div>
        <h1>{count}</h1><br/>
        <button onClick={()=>setCount(count-1)}>Click here</button>
    </div>)
}
export default us2