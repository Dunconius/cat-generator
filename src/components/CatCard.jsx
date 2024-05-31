// CatCard.jsx
import React from "react";
import "./CatCard.css";
import Like from "./like";

const CatCard = ({ catName, catImage, likeStatus, onToggleLike }) => {
  return (
    <div className="catCard">
      <div className="catHeader">
        <Like likeStatus={likeStatus} onToggleLike={onToggleLike} />
        <h1>{catName}</h1>
      </div>
      <div className="catImageContainer">
        {catImage && <img src={catImage} alt={catName} className="catImage" />}
      </div>
    </div>
  );
};

export default CatCard;
