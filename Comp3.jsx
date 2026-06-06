import { useContext } from "react";
import {Sty} from "./Comp1";
import {Str} from "./Comp2";

function Comp3(){
    const sty=useContext(Sty)
    const string=useContext(Str)
    return(<h1 style={sty}>Welcome {string}</h1>)
}
export default Comp3
