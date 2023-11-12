import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import GetMovieReviews from 'components/helpers/GetMovieReviews';
import { RenderReviews } from 'components/RenderReviews/RenderReviews';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const movieReviews = async () => {
      try {
        const response = await GetMovieReviews(movieId);
        // console.log(response);
        const { results } = response.data;
        setReviews(results);
      } catch (error) {
        Notiflix.Notify.warning(`${error.message}`);
      } finally {
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <div>
      <RenderReviews reviews={reviews} />
      {reviews.length === 0 && <p>No reviews</p>}
    </div>
  );
};

export default Reviews;
