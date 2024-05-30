// CatList.jsx
import React, { useState } from "react";
import CatCard from "./CatCard.jsx";
import fetchCatImage from "../functions/imageSearchFunction.jsx"
import "./CatList.css"



let catList = [
    "Fluffy",
    "Scruffy",
    "Puffy",
    "Buttermilk",
    "Crockett",
    "Trouble",
    "TomTom",
    "Squeaker",
    "Banshee",
    "Jones",
    "Mr Jenkins",
    "Scruff McGraw",
    "Ozzy",
    "Mrs Whiskers",
    "Truffles",
    "Trombone",
    "Pork Chop",
    "Kittykins",
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Copy the array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function CatList() {
    const [catImages, setCatImages] = useState([]);
    const [randomCatNames, setRandomCatNames] = useState([]);
  
    const handleFetchCatImages = async () => {
      // Fetch 6 cat images
      const images = await Promise.all(Array.from({ length: 6 }, () => fetchCatImage()));

      // Shuffle the cat names and take the first 6
      const shuffledCatNames = shuffleArray(catList).slice(0, 6);
      
      setCatImages(images);
      setRandomCatNames(shuffledCatNames.slice(0, images.length));
    };
  
    return (
      <section>
        <h1>Cat Generator</h1>
        <button onClick={handleFetchCatImages}>Get Cats!</button>
        <div className="catList">
        {catImages.map((image, index) => (
        <CatCard key={index} catName={randomCatNames[index]} catImage={image} />
      ))}
        </div>
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