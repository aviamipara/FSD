//  write react js progrram to perform the folowing task .
//  comp1.jsx creates a context for css style and provide it to comp2.jsx comp2 create a context a string having value sutdents and
// provide it to comp3.jsx comp3 cansums both the context and display a message withe providede stlye of backgeound color font color and font size


import {createContext}  from 'react'
import Comp2 from './Comp2'

const Sty=createContext()

function Comp1(){
    const style1={backgroundColor:'cyan',color:'blue',fontSize:'50px'}
    return(<Sty.Provider value={style1}>
        <Comp2/>
        
    </Sty.Provider>)
}
export default Comp1
export {Sty}  