import React from 'react';
import "./Main.css"
import ImageSearch from './ImageSearch';
import Card from './Card';

export default function Main(){

    const cardsData = [];

    return (
        <div className="main">
            <h1>This is the CAT GENERATOR main section</h1>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card key={index} title={card.title} imageUrl={card.imageUrl} />
                ))}
            </div>
            <ImageSearch />
        </div>
    );
}