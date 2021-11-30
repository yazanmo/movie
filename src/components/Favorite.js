import React, { useContext } from "react";
import { DataContext } from "../DataContext";

export default function Favorite() {
  const { favorites, setfavorites } = useContext(DataContext);

  const removeFromFavorite = (movie) => {
    const updater = [...favorites];
    updater.forEach((item, index) => {
      if (item.id === movie.id) {
        updater.splice(index, 1);
      }
    });
    setfavorites(updater);
  };

  return (
    <div>
      <h1 id="watch-list">Favorites:</h1>
      <div className="favorites-movies-cnt">
        {favorites && favorites.length >= 1 ? (
          favorites.map((movie) => {
            return (
              <div className="movies-item">
                <h1 className="movie-title">{movie.title}</h1>
                {movie.poster_path ? (
                  <img
                    className="movie-poster"
                    alt={`${movie.title} poster`}
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  />
                ) : (
                  <div className="noimage">
                    <p>Poster unavailable</p>
                  </div>
                )}
                <div className="movie-buttons">
                  <button
                    className="movie-btn"
                    onClick={() => {
                      removeFromFavorite(movie);
                    }}
                  >
                    Remove
                  </button>
                  
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <h1>You don't have any favorite movies</h1>
          </div>
        )}
      </div>
    </div>
  );
}