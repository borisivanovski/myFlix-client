import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

      const [selectedMovie, setSelectedMovie] = useState(null);

      useEffect(() => {
        fetch("https://myflix-api-3dxz.onrender.com/movies")
          .then((response) => response.json())
          .then((data) => {
            const moviesFromApi = data.docs.map((doc) => {
              return {
                id: doc.key,
                title: doc.title,
                author: doc.director_name?.[0]
              };
            });
    
            setMovies(moviesFromApi);
          });
      }, []);
    
      if (selectedMovie) {
        return (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
     }

      if (selectedMovie) {
        return (
          <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        );
      }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard 
         key={movie.id}
         movie={movie} 
         onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}
         />
      })}
    </div>
  );
};