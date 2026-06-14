function PB303_2(props){
    return(
        <table>
            <tr>
                <th>Name</th>
                <th>RollNo.</th>
                <th>T1_Marks</th>
                <th>T2_Marks</th>
            </tr>
            <tr>
                <td>{props.data1.Name}</td>
                <td>{props.data1.RollNo}</td>
                <td>{props.data1.T1}</td>
                <td>{props.data1.T2}</td>
            </tr>

            <tr>
                <td>{props.data2.Name}</td>
                <td>{props.data2.RollNo}</td>
                <td>{props.data2.T1}</td>
                <td>{props.data2.T2}</td>
            </tr>
        </table>
    )
}
export default PB303_2