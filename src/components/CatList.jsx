// CatList.jsx
import React, { useState } from "react";
import CatCard from "./CatCard.jsx";
import fetchCatImage from "../functions/imageSearchFunction.jsx";
import "./CatList.css";
import { catList, shuffleArray } from "./catUtils.jsx";
import CatGeneratorHeader from "./CatGeneratorHeader.jsx";
import GetCatsButton from "./GetCatsButton.jsx";

export default function CatList() {
    const [catImages, setCatImages] = useState([]);
    const [randomCatNames, setRandomCatNames] = useState([]);
    const [likeStatuses, setLikeStatuses] = useState([]); // Manage like statuses
    const [loading, setLoading] = useState(false);

    const handleFetchCatImages = async () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setLoading(true);
        setCatImages(Array.from({ length: 6 }, () => 'placeholder'));
        setRandomCatNames(Array.from({ length: 6 }, () => 'Loading...'));

        const images = await Promise.all(Array.from({ length: 6 }, () => fetchCatImage()));
        const shuffledCatNames = shuffleArray(catList).slice(0, 6);

        setCatImages(images);
        setRandomCatNames(shuffledCatNames.slice(0, images.length));
        setLikeStatuses(Array(images.length).fill(false)); // Reset likes
        setLoading(false); // Set loading to false
    };

    const handleToggleLike = (index) => {
        const newLikeStatuses = [...likeStatuses];
        newLikeStatuses[index] = !newLikeStatuses[index];
        setLikeStatuses(newLikeStatuses);
    };

    return (
        <section className="catListSection">
            <CatGeneratorHeader />
            <div className="catList">
                {catImages.map((image, index) => (
                    <CatCard
                        key={index}
                        catName={randomCatNames[index]}
                        catImage={image}
                        likeStatus={likeStatuses[index]}
                        onToggleLike={() => handleToggleLike(index)}
                        loading={loading} // Pass loading state to CatCard
                    />
                ))}
            </div>
            <GetCatsButton onFetchCats={handleFetchCatImages} />
        </section>
    );
}
