// CatCard.jsx
import React from "react";
import "./CatCard.css";
import Like from "./like";
import catLoading from "../assets/catLoading.jpg"

const CatCard = ({ catName, catImage, likeStatus, onToggleLike, loading }) => {
  return (
    <div className="catCard">
      <div className="catHeader">
        <Like likeStatus={likeStatus} onToggleLike={onToggleLike} />
        <h1>{catName}</h1>
      </div>
      <div 
        className="catImageContainer"
        style={{ backgroundImage: loading || catImage === 'placeholder' ? `url(${catLoading})` : 'none' }}
      >
        {loading || catImage === 'placeholder' ? (
          <div className="placeholderImage">Cats Loading...</div> // Placeholder content
        ) : (
          <img src={catImage} alt={catName} className="catImage" />
        )}
      </div>
    </div>
  );
};

export default CatCard;
