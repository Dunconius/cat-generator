import { useState } from "react";
import { FaRegStar , FaStar } from "react-icons/fa";


function Star() {
    const [starStatus, setStarStatus] = useState(false);

    function toggleStars() {
        console.log('clicked star!');
        setStarStatus(!starStatus);
    }

}


export default function FiveStars() {
    return (
        <div>
            {Array.from( {length: 5}, (_, index) => (
                <FaRegStar key={index} size={100}/>
            ))}
        </div>
        
    )
}