import {useState} from 'react'
function us3(){
    const [sty,setSty]=useState("yellow")
    function handleClick(){
        setSty("cyan")
    }
    return(<div>
        <h1 style={{backgroundColor:sty}}>
             Hello with Style 
        </h1><br/>
        <button onClick={handleClick}>Click here</button>
    </div>)
}
export default us3