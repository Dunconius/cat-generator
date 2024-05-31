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
    // const [loading, setLoading] = useState(false);
  
    const handleFetchCatImages = async () => {
      // setLoading(true); // Set loading to true while waiting for API response
      const images = await Promise.all(Array.from({ length: 6 }, () => fetchCatImage()));
      const shuffledCatNames = shuffleArray(catList).slice(0, 6);
      
      setCatImages(images);
      setRandomCatNames(shuffledCatNames.slice(0, images.length));
      // setLoading(false); // Set loading to false once data is loaded
    };
  
    return (
      <section>
        <CatGeneratorHeader onFetchCats={handleFetchCatImages} /> {/* Use the new component */}
        <div className="catList">
          {catImages.map((image, index) => (
            <CatCard key={index} catName={randomCatNames[index]} catImage={image} />
          ))}
        </div>
      </section>
    );
  }

