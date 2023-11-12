import css from './RenderDetails.module.css';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const RenderDetails = ({ movies }) => {
  return (
    <>
      {movies.length !== 0 &&
        movies.map(item => {
          return (
            <div key={item.id} className={css.containerInfo}>
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w400/${item.poster_path}`
                    : defaultImg
                }
                alt="poster"
              />
              <div className={css.textInfo}>
                <h2>
                  {item.title ?? item.original_title}
                  <span>({item.release_date.slice(0, 4)})</span>
                </h2>
                <p>Rating: {String(item.vote_average).slice(0, 3)}</p>
                <h3>Overview:</h3>
                <p>{item.overview}</p>
                <h3>Genres:</h3>
                <p>{item.genres.map(item => item.name).join(' | ')}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
