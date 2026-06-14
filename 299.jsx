// Write react js script to display alert box with text “Welcome to LJU” by clicking
// on button.

function PB299(){
    function handleClick(){
        alert("Welcome to LJU")
    }

    return(
        <button  onClick={handleClick}>
            Click
        </button>
    )
}
export default PB299
