import { useContext } from "react";
import {Lang} from './387_C1'

function C3(){
    var lang = useContext(Lang)
    var msg = ""

    if (lang == "English") {
        msg = "Welcome"
    }
    else {
        msg = "स्वागत हे"
    }

    return (
        <>
            <h1>{msg}</h1>
        </>
    )
}
export default C3