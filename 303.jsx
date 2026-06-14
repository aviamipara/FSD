import PB303_2 from './303_2'
function PB303(){
    var ob1 = {"Name" : "Nitesh" , RollNo:99 , T1 : 90 , T2 : 89}
    var ob2 = {"Name" : "Aviraj" , RollNo:102 , T1 : 94 , T2 : 90}
    return(<>
    <PB303_2 data1={ob1} data2={ob2}/>
    {/* <PB303_2 Name="Aviraj" RollNo={102} T1={94} T2={90}/> */}
    </>
    )
}
export default PB303