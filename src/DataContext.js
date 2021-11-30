import React, { useState, createContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState();
  const [movies, setMovies] = useState([]);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState();
  const [favorites, setfavorites] = useState(
    localStorage.getItem("favories")
      ? JSON.parse(localStorage.getItem("favories"))
      : []
  );


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const handleSearch = (e) => {
    setSearch(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ad0ff7972360998948d217449d278653&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };

  const handlePageChange = (page) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ad0ff7972360998948d217449d278653&language=en-US&page=${page}&include_adult=false&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  };



  const getMovie = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ad0ff7972360998948d217449d278653&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setSelectedMovieDetails(data));
  };

  return (
    <DataContext.Provider
      value={{
        handleSearch,
        movies,
        handlePageChange,
        favorites,
        setfavorites,
        selectedMovie,
        setSelectedMovie,
        getMovie,
        selectedMovieDetails,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};