import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ onClick }) => {
  const [likeStatus, setLikeStatus] = useState(false);

  const toggle = () => {
    setLikeStatus(!likeStatus);
    onClick();
  }

  return (
    <div onClick={toggle} style={{ cursor: 'pointer' }}>
      {likeStatus ? <AiFillHeart color="#ff2ab6" size={60} /> : <AiOutlineHeart color="#000000" size={60} />}
    </div>
  );
}

export default Like;
