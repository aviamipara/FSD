function Map1(){
    const arr=[1,2,3,4]

    return(<>
    {
        arr.map((val)=>{
            return <h2>Array element={val}</h2>
        })
    }
    </>)
}
export default Map1
