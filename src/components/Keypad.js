// Code Keypad Component Here
import react from "react";

function Keypad() {
    function showChange() {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={showChange}></input>
    )
}

export default Keypad;