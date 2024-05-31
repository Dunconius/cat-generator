import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import './FiveStars.css'; // Import the CSS file

function Star({ filled, onClick }) {

    return (
        <div className={`star ${filled ? 'filled' : 'empty'}`}
        onClick={onClick}>
            {filled ? <FaStar /> : <FaRegStar />}
        </div>
    );
}

export default function FiveStars({ rating, onRatingChange }) {
    return (
        <div className="starContainer">
            {Array.from({ length: 5 }, (_, index) => (
                <Star 
                    key={index}
                    filled={index < rating}
                    onClick={() => onRatingChange(index + 1)} />
            ))}
        </div>
    );
}
