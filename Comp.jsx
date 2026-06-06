// file 1

// 1.Create Context

//  import {createContext}  from 'react'
//  const Fname=createContext() -- veriable first letter is capital


// 2.Provide a value

// <Fname.Provider value="abc">
//  <comp1/>
// </Fname.Provider>
// export {Fname}


// file 2

//  import  {useConteaxt} from 'react'
//  import {Fname} from './file1'
//  const name=useContext(Fname)




// write react js progrram to perform task as alsked below

// 1.create one perent file com.jsx and other two components files c1.jsx & c2.jsx 
// 2. pass first name and last name comp.jsx to c2.jsx and display welcom message using this values in browser


import {createContext}  from 'react'
import C1 from './C1'
const Fname=createContext()
const Lname=createContext()

function Comp(){
    return(<Fname.Provider value={852}>
        <Lname.Provider value={156}>
            <C1/>
        </Lname.Provider>
    </Fname.Provider>)
}
export default Comp
export {Fname,Lname}