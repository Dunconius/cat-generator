// imageSearch.js
import axios from 'axios';

const fetchCatImage = async () => {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
      headers: {
        'x-api-key': process.env.REACT_APP_CAT_API_KEY
      }
    });
    return response.data[0].url;
  } catch (error) {
    console.error('Error fetching cat image:', error);
    return null;
  }
};

export default fetchCatImage;




// UNSPLASH WORKING FUNCTION
// import axios from 'axios';

// const fetchCatImage = async () => {
//   const keyword = "cat";
//   try {
//     const response = await axios.get(
//       `https://api.unsplash.com/photos/random?query=${keyword}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
//     );
//     return response.data.urls.regular;
//   } catch (error) {
//     console.error('Error fetching image:', error);
//     return null;
//   }
// };

// export default fetchCatImage;

