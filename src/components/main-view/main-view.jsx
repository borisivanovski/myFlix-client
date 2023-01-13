import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovie] = useState([
        {
          id: 1,
          title: "Big Fish",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
          director: "Tim Burton"
        },
        {
          id: 2,
          title: "Harry Potter and the Chamber of Secrets",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51WAikRq37L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
          director: "Chris Columbus"
        },
        {
          id: 3,
          title: "Lord of the Rings",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
          director: "Peter Jackson"
        },
        {
          id: 4,
          title: "Modigliani",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/51HbNW6RzhL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
          director: "Mick Davis"
        },
        {
          id: 5,
          title: "The Ring",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/41MBLi5a4jL._SX384_BO1,204,203,200_.jpg",
          director: "Gore Verbinski"
        }
      ]);

      const [selectedMovie, setSelectedMovie] = useState(null);


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
         movieTitle={movie} 
         onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)}
         />
      })}
    </div>
  );
};