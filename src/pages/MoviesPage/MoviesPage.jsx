import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { FormSubmit } from 'components/FormSubmit/FormSubmit';
import GetMoviesForName from 'components/helpers/GetMoviesForName';
import Notiflix from 'notiflix';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchValue, setSearchValue] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchValue.get('query');

  const onSubmitForm = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value;
    setSearchValue({ query: value });
  };

  useEffect(() => {
    if (!query) return;

    const searchMoviesForName = async () => {
      try {
        setIsLoading(true);
        const response = await GetMoviesForName(query);
        const { results } = response.data;
        setMovies([...results]);

        if (results.length < 1) {
          Notiflix.Notify.warning(
            'Sorry, nothing was found for your request...'
          );
          return;
        }
      } catch (error) {
        Notiflix.Notify.warning(`${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    searchMoviesForName();
  }, [query]);

  return (
    <>
      <FormSubmit onSubmitForm={onSubmitForm} />
      <MoviesList movies={movies} />
      <Loader isLoading={isLoading} />
    </>
  );
};

export default MoviesPage;
