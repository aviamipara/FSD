import {useState} from 'react'
import img1 from './assets/react.svg'
import img2 from './assets/vite.svg'

function us4(){
    const [pic,setPic]=useState(img1)
    function handleClick(){
        if(pic==img1){

            setPic(img2)
        }
        else{
            setPic(img1)
        }
    }
    
    return(<div>
        <img src={pic} height="200px" width="200px" />
        <br/>
        <button onClick={handleClick}>Change image</button>
    </div>)
}
export default us4