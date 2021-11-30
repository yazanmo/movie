import React from 'react'
import "./Home.css"


const IMG_API = "http://image.tmdb.org/t/p/w200"

const Movie = ({title,poster_path})=>(

<div className="movie">

<img src={"http://image.tmdb.org/t/p/w200" + poster_path} alt={title} />
<h1 className="movie-title" >{title}</h1>
</div>

);
export default Movie;