import { useContext } from "react";
import {username} from './367_Comp'

function Comp2(){
    const uname=useContext(username)
    return(<h1 style={{color:"blue"}}>Welcome {uname}</h1>)
}
export default Comp2