import React, { useContext } from "react";
import { DataContext } from "../DataContext";
import { useHistory } from "react-router-dom";
import "./Mainpage.css";
import Home from "./Home";



export default function Mainpage() {
  const {
    handleSearch,
    movies,
    handlePageChange,
    setSelectedMovie,
  } = useContext(DataContext);

  let history = useHistory();


  const goToPage = (movie) => {
    setSelectedMovie(movie.id);
    let str = movie.title;
    str = str.replace(/\s+/g, "-").toLowerCase();
    history.push(`/details/${str}`);
  };

  return (
    <div className="main-cnt">
      <h1>Search for movies .. </h1>
      <input
        type="text"
        autoComplete="off"
        placeholder="Search.."
        id="search-input"
        onChange={handleSearch}
      />
      <div className="movies-cnt">
        {movies.results
          ? movies.results.map((movie) => {
              return (
                <div className="movies-item">
                  {movie.poster_path ? (
                    <img
                        className="movie-poster"
                        alt={`${movie.title} poster`}
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        onClick={() => {
                        goToPage(movie);
                    }}
                    />
                ) : (
                    <div className="noimage">
                    <p>Poster unavailable</p>
                    </div>
                    )}
                   <h1 className="movie-title">{movie.title}</h1>
                </div>
                );
            })
            : <Home/>}
        </div>
        {movies.page ? (
        <div>
          <p id="pages-p">
            Page {movies.page} of {movies.total_pages}
          </p>
          <button
            className="movie-btn"
            onClick={() => {
              if (movies.page !== 1) {
                handlePageChange(movies.page - 1);
              }
            }}
          >
            Previous page
          </button>
          <button
            onClick={() => {
              if (movies.page !== movies.total_pages) {
                handlePageChange(movies.page + 1);
              }
            }}
            className="movie-btn"
          >
            Next page
          </button>
        </div>
      ) : null}
    </div>
    );
}