export const MovieCard = ({ movie, onMovieClick  }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movieTitle);
      }}
    >
      {movieTitle.title}
    </div>
  );
};