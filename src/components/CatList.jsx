// CatList.jsx
import React, { useState } from "react";
import CatCard from "./CatCard.jsx";
import fetchCatImage from "../functions/imageSearchFunction.jsx"



let catList = [
    "Fluffy",
    "Scruffy",
    "Puffy",
    "Diddy",
    "Kitty",
    "Iffy",
];


export default function CatList() {
    const [catImages, setCatImages] = useState([]);
  
    const handleFetchCatImages = async () => {
      const images = await Promise.all(catList.map(() => fetchCatImage()));
      setCatImages(images);
    };
  
    return (
      <section>
        <button onClick={handleFetchCatImages}>Get Cats!</button>
        {catList.map((cat, index) => (
          <CatCard key={index} catName={cat} catImage={catImages[index]} />
        ))}
      </section>
    );
  }



// OLD WORKING FUNCTION
// export default function CatList() {
    
//     return (
//         <section>
//             {catList.map((cat, index) => {
//                 return <CatCard key={index} catName={cat} />
//             })}
//         </section>
//     );
// }