
// Create a React app:
// • Add one textarea
// • Display live character count below it
// • If characters exceed 100, text color becomes red




import { useState } from 'react'

function PB384() {
    const [count, setCount] = useState(0)
    const [txtColor, setTxtColor] = useState("black")

    function handleTextChange(event) {
        const currentLength = event.target.value.length
        setCount(currentLength)

        if (currentLength > 100) {
            setTxtColor("red")
        } else {
            setTxtColor("white")
        }
    }

    return (
        <div>
            <h2>Character Counter App</h2>
            <textarea 
                rows="15" 
                cols="90" 
                onChange={handleTextChange} 
                placeholder="Type your text here..."
            />
            <p style={{ color: txtColor }}>
                Character Count: {count}
            </p>
        </div>
    )
}

export default PB384