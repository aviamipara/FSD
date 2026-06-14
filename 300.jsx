// Write react js script to display values in console while changing it in text box.

function PB300(){
    function handleChange(){
        console.log(event.target.value)
    }
    return(
        <input type="text" onChange={handleChange}/>
    )
}
export default PB300