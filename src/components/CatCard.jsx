// CatCard.jsx
import React, { useState, useEffect } from "react";
import "./CatCard.css";
import Like from "./like";

const CatCard = ({ catName, catImage }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true whenever catImage changes
  }, [catImage]);

  const handleImageLoad = () => {
    setLoading(false); // Set loading to false when image is loaded
  };

  return (
    <div className="catCard">
      <div className="catHeader">
        <Like onClick={handleLike} />
        <h1>{catName}</h1>
      </div>
      <div className="catImageContainer">
        {loading && <div className="spinner"></div>} {/* Show spinner while loading */}
        <img
          src={catImage}
          alt={catName}
          className="catImage"
          onLoad={handleImageLoad}
          style={{ display: loading ? "none" : "block" }} // Hide image while loading
        />
      </div>
    </div>
  );
};

export default CatCard;





// old working function
// import "./CatCard.css"

// const catPhotoSource = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1743&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

// export default function CatCard (props) {

//     return (
//         <div className="catCard" key={props.key}>
//             <h1>{props.catName}</h1>
//             <div >
//                 <img src={catPhotoSource} alt="" className="catImage"/>
//             </div>
//         </div>
//     )
// }
