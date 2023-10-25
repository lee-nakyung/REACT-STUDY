import React from 'react';
import { MovieContainer, Letter, Overview } from './Movie.style.jsx';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Movie(props) {
    return (
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
    );
}

  
  export default Movie