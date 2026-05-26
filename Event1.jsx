function Event(){
    function handleClick(){
        alert("Double Clicked")
    }
    const myStyle={color:"white",backgroundColor:"black",padding:"20px 25px",margin:"200px"}

    return(
        <button style={myStyle} onDoubleClick={handleClick}>
            Click
        </button>
    )
}
export default Event