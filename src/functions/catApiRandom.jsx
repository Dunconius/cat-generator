import React, { useState, useEffect } from 'react';

const CatImage = () => {
  const [catImage, setCatImage] = useState('');

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': 'YOUR_API_KEY'
      }
    })
      .then(response => response.json())
      .then(data => {
        setCatImage(data[0].url);
      })
      .catch(error => console.error('Error fetching cat image:', error));
  }, []);

  return (
    <div>
      {catImage ? <img src={catImage} alt="Random Cat" /> : <p>Loading...</p>}
    </div>
  );
};

export default CatImage;