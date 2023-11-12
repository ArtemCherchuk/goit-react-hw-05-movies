import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RenderCast } from 'components/RenderCast/RenderCast';
import GetMovieCast from 'components/helpers/GetMovieCast';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const movieCast = async () => {
      try {
        const response = await GetMovieCast(movieId);
        console.log(response);
        const { cast } = response.data;
        setCast(cast);
      } catch (error) {
        Notiflix.Notify.warning(`${error.message}`);
      } finally {
      }
    };

    movieCast();
  }, [movieId]);

  return (
    <div>
      <RenderCast cast={cast} />
    </div>
  );
};

export default Cast;
