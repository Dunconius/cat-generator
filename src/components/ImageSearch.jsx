// unsplashApi.js
import axios from 'axios';

const fetchCatImage = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'cat', // Search query for cat images
        orientation: 'landscape', // Optionally specify image orientation
        client_id: process.env.REACT_APP_UNSPLASH_API_KEY, // Replace with your Unsplash API key
      },
    });

    return response.data.urls.regular; // Return the URL of the fetched cat image
  } catch (error) {
    console.error('Error fetching cat image:', error);
    return null; // Return null in case of an error
  }
};

export default fetchCatImage;
