import Home from "./Home";
import { movies } from '../movieDummy';
import Movie from '../Components/Movie';
import { AppContainer } from '../Components/Movie.style';

function Movies(){
    return (
        <>
        <AppContainer>
      {
        movies.results.map((item) => {
          return (
            <Movie movieData={item} />
          )
        })
      }
   </AppContainer>
        </>
    )
}

export default Movies;