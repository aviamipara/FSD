import He from './assets/hero.png'
function Comp(){
    const name="LJU"
    const myStyle={color:"blue",backgroundColor:"aqua"}
    return(
        //1.// <div>
        //     <h1>Hello</h1>
        //     <p>React</p>
        // </div>

        //2.// <img src="image.jpg"/>

        //3.// <h1>{name}</h1>

        //4.// <h1 style={{color:"blue"}}>Hello</h1>

        //5.// <h1 style={{backgroundColor:"red"}}>Hello</h1>

        // <h1 style={myStyle}>Hello</h1>

        //6.//  {/* comments */}

        <img src={He} height="350px" width="300px"/>

    )
}
export default Comp



// Rules

//1. Single root element
//2. Close all tags
//3. pass expression
//4. Style
//5. Camelcasing    - backgroundColor, className , onClick
//6. comments 