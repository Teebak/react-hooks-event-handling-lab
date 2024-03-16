import React from "react";

function Keypad (){

    const passenter = ()=>{
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={passenter}></input>
        </div>
    )
}

export default Keypad;