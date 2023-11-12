import axios from 'axios';

const BASE_KEY = '63ea47c92388c32ebea94a57fb79599e';

const GetMoviesForName = async query => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${BASE_KEY}`
  );
};

export default GetMoviesForName;
