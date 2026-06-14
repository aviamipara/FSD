import { useContext } from "react"
import { Value } from "./381_F1"

function F3() {
    const val = useContext(Value)

    const showAlert = () => {
        alert(
        `First Name: ${val.fname}\n` +
        `Last Name: ${val.lname}\n` +
        `Message: ${val.msg}\n` +
        `City: ${val.city}\n` +
        `Gender: ${val.gen}`
        );
    };

    return (
        <>
            <div>
                <button onClick={showAlert}>Show Details</button>
            </div>
        </>
    )
}

export default F3