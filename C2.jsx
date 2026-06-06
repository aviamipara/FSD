import { useContext } from "react";
import { Fname,Lname } from "./Comp";
function C2(){
    const name=useContext(Fname)
    const surname=useContext(Lname)
    return(<h1>Welcome {name+surname}</h1>)
}
export default C2

