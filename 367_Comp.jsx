// Write a reactJS program to perform the tasks as asked below.
// 1) Create one main file (parent file)Main.js and other 2 component files 
// Comp1.js, Comp2.js. Pass username from Main.js file to Comp2.js file. 
// Display this user name in browser in Blue color. (useContext)

import { createContext } from "react";
import Comp1 from './367_Comp1';

const username=createContext()

function Comp(){
    return(
        <>
        <username.Provider value="aviamipara">
            <Comp1/>
        </username.Provider>
        </>
    )
}
export default Comp
export {username}