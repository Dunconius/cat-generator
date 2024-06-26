// Like.jsx
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./like.css";

const Like = ({ likeStatus, onToggleLike }) => {
  return (
    <div className="likeButton" onClick={onToggleLike} style={{ cursor: 'pointer' }}>
      {likeStatus ? <AiFillHeart color="#ff2ab6" size={60} /> : <AiOutlineHeart color="#000000" size={60} />}
    </div>
  );
};

export default Like;
