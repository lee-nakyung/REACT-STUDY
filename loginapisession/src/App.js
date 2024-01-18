import logo from './logo.svg';
import './App.css';
import {styled} from "styled-components"
import { GlobalStyle } from './style/globalStyle';
import Main from './main/main';


const Wrapper = styled.div`
display:flex;
flex-direction: column;
max-width:393px;
width:100vw;
min-height:852px;
background-color:white;

`
function App() {
  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <Main/>
    </Wrapper>
      
    </>
  );
}

export default App;
