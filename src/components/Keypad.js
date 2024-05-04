// Code Keypad Component Here
import React from "react"

function Keypad (){
    return (
        <div>
            <form>
                <input
                type ="password"
                typeof="password"
                placeholder="Enter password"
                onChange={() => console.log("Entering password...")}
                />
                </form>
        </div>
    );
}

export default Keypad;