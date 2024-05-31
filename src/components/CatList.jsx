// CatList.jsx
import React, { useState } from "react";
import CatCard from "./CatCard.jsx";
import fetchCatImage from "../functions/imageSearchFunction.jsx";
import "./CatList.css";
import { catList, shuffleArray } from "./catUtils.jsx";
import CatGeneratorHeader from "./CatGeneratorHeader.jsx";



export default function CatList() {
    const [catImages, setCatImages] = useState([]);
    const [randomCatNames, setRandomCatNames] = useState([]);
    const [likeStatuses, setLikeStatuses] = useState([]); // Manage like statuses
  
    const handleFetchCatImages = async () => {
      const images = await Promise.all(Array.from({ length: 6 }, () => fetchCatImage()));
      const shuffledCatNames = shuffleArray(catList).slice(0, 6);
      
      setCatImages(images);
      setRandomCatNames(shuffledCatNames.slice(0, images.length));
      setLikeStatuses(Array(images.length).fill(false)); // Reset likes
    };

    const handleToggleLike = (index) => {
      const newLikeStatuses = [...likeStatuses];
      newLikeStatuses[index] = !newLikeStatuses[index];
      setLikeStatuses(newLikeStatuses);
    };
  
    return (
      <section className="catListSection">
        <CatGeneratorHeader onFetchCats={handleFetchCatImages} />
        <div className="catList">
          {catImages.map((image, index) => (
            <CatCard 
            key={index} 
            catName={randomCatNames[index]} 
            catImage={image} 
            likeStatus={likeStatuses[index]}
            onToggleLike={() => handleToggleLike(index)}
            />
          ))}
        </div>
      </section>
    );
  }

