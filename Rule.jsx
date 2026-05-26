function Rule(){
    let n="LJU"
    return (<>
     <h1>{n}</h1>     {/* LJU */}
     <h1>"{n}"</h1>   {/* "LJU" */}
     <h1>{"{n}"}</h1> {/* {n} */}
     <h1>{"n"}</h1>   {/* n */}
     <h1>{n+"test"}</h1> {/* LJU test */}
     <h1>{n.toUpperCase()}</h1> {/* LJU */}
     <h1>{5+5}</h1>  {/* 10 */}
     <h1>{[1,2,3]}</h1> {/* 123 */}
     <h1>{[1,2,3].join(",")}</h1>  {/* 1,2,3 */}
    </>)
}
export default Rule