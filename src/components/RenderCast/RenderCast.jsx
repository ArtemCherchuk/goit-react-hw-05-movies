const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const RenderCast = ({ cast }) => {
  return (
    <ul>
      {cast.map(item => {
        return (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : defaultImg
              }
              alt="poster"
              width={100}
            />
            <h3>{item.name}</h3>
            <p>{item.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
