import AdPage from "../Components/AdPage";
import { movies } from '../movieDummy';
import Movie from '../Components/Movie';
import { AppContainer } from '../Components/Movie.style';

function Home(){
    return (
        <>
        <AdPage/>
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

export default Home;