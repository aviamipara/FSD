function P1(props){
    return (<>
     {
        props.info.map((pr)=>{
            return(<div>
                <img src={pr.pic}  alt="no image"/>
                <h2>{pr.name}</h2>
                <h2>{pr.price}</h2>
            </div>)
        })
     }
    </>)
}
export default P1