// unsplashApi.js
import axios from 'axios';

const fetchCatImage = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'cats',
        client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
      },
    });

    return response.data.urls.regular;
  } catch (error) {
    console.error('Error fetching cat image:', error);
    return null;
  }
};

