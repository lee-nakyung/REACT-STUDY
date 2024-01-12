import logo from './logo.svg';
import './App.css';
import PhotoList from "./photo_list";
import { useState } from 'react';
import { useEffect } from 'react';
function App() {

  const [photos, setPhotos]=useState([]);

  useEffect(()=>{
    const requestOptions={
      method:'GET',
      redirect:'follow'
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response=>response.json())
    .then(result=>setPhotos(result))
    .catch(error=>console.log('error'.error))
  },[])

  return (
    <div className="App">
      <PhotoList photos={photos}/>
    </div>
  );
}

export default App;
