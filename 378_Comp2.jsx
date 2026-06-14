import { useContext } from "react";
import {color,bgcolor} from './378_Comp'

function Comp2(){
    const c=useContext(color)
    const bg=useContext(bgcolor)

    return(
        <>
        <h1 style={{color:c ,backgroundColor:bg}}>Welcome to LJU</h1>
        </>
    )
}
export default Comp2