import React, { useContext, useEffect } from "react";
import { DataContext } from "../DataContext";
import "./Detail.css";

export default function Detail() {
  const { selectedMovie, getMovie, selectedMovieDetails,favorites,
    setfavorites } = useContext(
    DataContext
  );



  useEffect(() => {
    getMovie(selectedMovie);
  }, []);

  console.log(selectedMovieDetails);

  const favortie = (movie) => {
    const check = favorites.every((item) => {
      return item.id !== movie.id;
    });
    if (check) {
        setfavorites([...favorites, movie]);
    } else {
      alert("This movie is already in your favorite");
    }
  };

  return selectedMovieDetails ? (
    <div className="details-cnt">
      <div className="movie-details-title">
          <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${selectedMovieDetails.backdrop_path}`}
          id="backdrop"
        />
        </div>
        <div>
        <h1 id="movie-title-h1">Title :  {selectedMovieDetails.title}</h1>
        <p id="runtime">Run time :  {selectedMovieDetails.runtime} min</p>
        <div className="movie-buttons">
                    <button
                        class="heart"
                        onClick={() => {
                            favortie(selectedMovieDetails);
                        }}
                    >
                    </button>
            </div>
        </div>
      </div>
      <div className="movie-details">
        <img
          id="details-poster"
          src={`https://image.tmdb.org/t/p/w200${selectedMovieDetails.poster_path}`}
        />
        <div className="movie-overview">
          <h3>Overview:</h3>
          <p>{selectedMovieDetails.overview}</p>
          <h3>Genres:</h3>
          {selectedMovieDetails.genres
            ? selectedMovieDetails.genres.map((genre) => (
                
                <span>{genre.name}, </span>
              ))
            : null}
          {/* <div className="movie-buttons">
                    <button
                        class="heart"
                        onClick={() => {
                            favortie(selectedMovieDetails);
                        }}
                    >
                    </button>
            </div> */}
         
        </div>
        
      </div>
    </div>
  ) : null;
}