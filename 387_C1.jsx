// Create a React app:
// • Parent component stores language value (“English” or “Hindi”)
// • Pass language using useContext
// • Child component displays “Welcome” in selected language
// • Add button in parent to toggle language

// Create a React app:
// • Parent component stores language value (“English” or “Hindi”)
// • Pass language using useContext
// • Child component displays “Welcome” in selected language
// • Add button in parent to toggle language

import { useState , createContext } from "react";
import C2 from "./387_C2";

const Lang = createContext()

function C1() {
    const [lang , setLang] = useState("English")

    function handleClick() {
        if (lang == "English") {
            setLang("Hindi")
        }
        else {
            setLang("English")
        }
    }

    return (
        <>
            <Lang.Provider value={lang}>
                <C2 />

                <button onClick={handleClick}>Click Here</button>
            </Lang.Provider>
        </>
    )
}

export default C1
export { Lang }
