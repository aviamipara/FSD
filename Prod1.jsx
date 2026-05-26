{/*
    Write a progrram using reactjs in which you have to print names of student and university which are past as props using json
*/}

import Prod2 from './Prod2.jsx'
function Prod1(){
    const Details={Student_name:"abc",Uni_name:"LJU"}
    return(
        <Prod2 data={Details}/>
    )
}
export default Prod1