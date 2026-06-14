//  Write react js script to display alert box with text “welcome to lju” only on
// double click button

function PB301(){
    function handleClick(){
        alert("Welcome to LJU")
    }

    return(
        <button  onDoubleClick={handleClick}>
            Double Click
        </button>
    )
}
export default PB301