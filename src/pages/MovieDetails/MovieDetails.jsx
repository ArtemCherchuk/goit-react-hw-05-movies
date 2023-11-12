import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { RenderDetails } from 'components/RenderDetails/RenderDetails';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Notiflix from 'notiflix';
import GetMovieDetails from 'components/helpers/GetMovieDetails';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const movieDetails = async () => {
      try {
        setIsLoading(true);
        const response = await GetMovieDetails(movieId);
        const { data } = response;
        setMovies([data]);
      } catch (error) {
        Notiflix.Notify.warning(`${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    movieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current} className={css.linkBack}>
        Back
      </Link>

      <RenderDetails movies={movies} />
      <div className={css.linkNav}>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>

      <Suspense fallback={<Loader isLoading={isLoading} />}>
        <Routes>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
