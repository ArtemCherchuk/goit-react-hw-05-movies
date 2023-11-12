export const RenderReviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h3>{item.author}</h3>
            {reviews.length > 0 && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
};
