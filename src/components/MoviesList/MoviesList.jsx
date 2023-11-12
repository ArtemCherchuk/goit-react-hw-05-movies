import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.length !== 0 &&
        movies.map(item => {
          return (
            <li key={item.id}>
              <Link
                className={css.listLink}
                to={`/movies/${item.id}`}
                state={{ from: location }}
              >
                {item.title ?? item.name}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MoviesList;
