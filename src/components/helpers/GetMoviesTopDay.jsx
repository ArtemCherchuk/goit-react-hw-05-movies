import axios from 'axios';

const BASE_KEY = '63ea47c92388c32ebea94a57fb79599e';

const GetMoviesTopDay = async () => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${BASE_KEY}`
  );
};

export default GetMoviesTopDay;
