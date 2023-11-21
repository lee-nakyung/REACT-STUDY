import React from 'react';
import { MovieContainer, Letter, Overview } from './Movie.style.jsx';
import { Link } from 'react-router-dom';
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Movie(props) {
    return (
      // <Link to={`/movie/${movieData.title}`}>
      <MovieContainer>
        <img src={`${BASE_IMAGE_URL}${props.movieData.poster_path}`} alt={props.movieData.title} />
        
        <Letter>
        <p>{props.movieData.title}</p>
        <p>{props.movieData.vote_average}</p>
        </Letter>

        <Overview>
            {props.movieData.title}
            <br></br>
            <br></br>
            {props.overview}
        </Overview>
        </MovieContainer>
        // </Link>
    );
}

  
  export default Movie