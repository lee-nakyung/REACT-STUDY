import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetail from './pages/Detail';


function App() {

 

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Movies/>}/>
      <Route path="/movie/:title" element={<MovieDetail />} />
      {/* <Route path="/person" element={<Celebrity />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/notFound" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
  );
}



export default App;
