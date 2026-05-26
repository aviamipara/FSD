function Form(){
    function handleSubmit(e){
        e.preventDefault()
        alert("form Submited")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="uname"/>
            <input type="submit"/>
        </form>
    )
}
export default Form