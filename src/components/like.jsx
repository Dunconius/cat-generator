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
      {likeStatus ? <AiFillHeart color="#ff6b81" size={100} /> : <AiOutlineHeart color="#000000" size={100} />}
    </div>
  );
}

export default Like;
