import React from "react";
import catLogo from '../assets/catLogo.png';
// import catLogo from "./assets/catLogo.png"

export default function ImageTest() {
    return (
        <div className="imageTest">
            <img src={catLogo} alt="cat logo" />
        </div>
    )
}