import axios from 'axios';
const BASE_KEY = '63ea47c92388c32ebea94a57fb79599e';

const GetMovieCast = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${BASE_KEY}`
  );
};

export default GetMovieCast;
