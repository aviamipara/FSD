import P1 from './Task1_P2'
import img1 from './assets/hero.png'
import img2 from './assets/react.svg'

function P(){
    const prod=[{pic:img1,name:"Prod1",price:30000},{pic:img2,name:"Prod2",price:4000}]
    return (<P1 info={prod}/>)
}
export default P