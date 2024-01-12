import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  let [like, setLike] = useState(0);

  return (
    <>
      <p>{like}</p>
    </>
  );

}




export default App;
