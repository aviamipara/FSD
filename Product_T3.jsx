function product(props){
    return(<div>
        {props.info.map((p)=>{
            return(<div>
                <img src={p.pic} height="200px" width="200px" />
                <h1>{p.name}</h1>
                <h1>{p.price}</h1>
            </div>)
        })}
    </div>)
}
export default product