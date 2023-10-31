import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from './pages/Home';
import Movies from './pages/Movies';


function App() {

 

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Movies/>}/>
      {/* <Route path="/person" element={<Celebrity />} />
      <Route path="/tv" element={<TV />} />
      <Route path="/notFound" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
  );
}



export default App;
