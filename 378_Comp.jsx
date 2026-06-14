import { createContext } from "react";
import Comp1 from './378_Comp1';

const color=createContext()
const bgcolor=createContext()

function Comp(){
    return(
        <>
        <color.Provider value="green">
        <bgcolor.Provider value="red">
            <Comp1/>
        </bgcolor.Provider>
        </color.Provider>
        </>
    )
}
export default Comp
export {color,bgcolor}