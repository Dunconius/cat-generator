// src/SortableInputList.js
import React, { useState } from 'react';
import FiveStars from './FiveStars';

const SortableInputList = () => {
  const [items, setItems] = useState([
    { id: 1, rating: 0 },
    { id: 2, rating: 0 },
    { id: 3, rating: 0 },
    { id: 4, rating: 0 },
    { id: 5, rating: 0 },
    { id: 6, rating: 0 },
  ]);

  const handleRatingChange = (id, newRating) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, rating: newRating } : item
    );
    const sortedItems = [...updatedItems].sort((a,b) => b.rating - a.rating);
    setItems(sortedItems);
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ marginBottom: '10px' }}>
          <FiveStars 
            rating={item.rating} 
            onRatingChange={(newRating) => handleRatingChange(item.id, newRating)} 
          />
        </div>
      ))}
    </div>
  );
};

export default SortableInputList;
