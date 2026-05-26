{/*
         Props (properties)

 Syntax:

 passing value

<Componentname property="value1"/>
<Componentname property="value2"/> 



        layout/accepting values

  function name(props){
  return(
     <h1>{props property}</h1>
     )}
  
  export dafault name  

  
*/}


import Pr2 from './Pr2'
function Pr1(){
    return(<>
    <Pr2 Name="Computer" Price="85000"/>
    <Pr2 Name="Mobile" Price={35000}/>
    </>
    )
}
export default Pr1


