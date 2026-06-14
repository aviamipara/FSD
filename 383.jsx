// Create a React app:
// • Add two buttons “Dark Mode” and “Light Mode”
// • Initially background should be white and text black
// • On clicking “Dark Mode” change background to black and text to white
// • On clicking “Light Mode” revert back


import { useState } from 'react'

function PB383() {
    const [bg, setBg] = useState("white")
    const [txt, setTxt] = useState("black")

    function handleDark() {
        setBg("black")
        setTxt("white")
    }

    function handleLight() {
        setBg("white")
        setTxt("black")
    }

    return (
        <div style={{ backgroundColor: bg, color: txt, minHeight: "100vh" }}>
            <h2>Theme Toggler App</h2>
            <p>This is standard text.</p>
            <button onClick={handleDark}>Dark Mode</button>
            <button onClick={handleLight}>Light Mode</button>
        </div>
    )
}

export default PB383