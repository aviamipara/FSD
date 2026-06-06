// Create a React component that randomly displays one image from a set of predefined images and changes the image when a button is clicked
import {useState} from 'react'
import img1 from './assets/react.svg'
import img2 from './assets/vite.svg'
import img3 from './assets/hero.png'
import img4 from './assets/Tiger.png'
import img5 from './assets/Lion.jpg'

function T4(){
    const arr=[img1,img2,img3,img4,img5]
    const [pic,setPic]=useState(arr[0])
    function handleClick(){
        const randomIndex=Math.floor(Math.random()*arr.length)
        setPic(arr[randomIndex])
    }
    
    return(<div>
        <img src={pic} height="200px" width="200px" />
        <br/>
        <button onClick={handleClick}>Change image</button>
    </div>)
}
export default T4

