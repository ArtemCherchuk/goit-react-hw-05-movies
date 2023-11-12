import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import GetMoviesDataTopDay from 'components/helpers/GetMoviesTopDay';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const response = await GetMoviesDataTopDay();
        const { results } = response.data;
        setMovies([...results]);
      } catch (error) {
        Notiflix.Notify.warning(`${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <>
      <h1>The best films for today</h1>
      <MoviesList movies={movies} />
      <Loader isLoading={isLoading} />
    </>
  );
};

export default HomePage;
