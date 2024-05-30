// CatCard.jsx
import React from "react";
import "./CatCard.css";

const CatCard = ({ catName, catImage }) => {
  return (
    <div className="catCard">
      <h1>{catName}</h1>
      <div>
        {catImage && <img src={catImage} alt={catName} className="catImage" />}
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