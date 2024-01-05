import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from "react";
import data from "./data.js";
import {Routes, Route, Link} from 'react-router-dom'
import Detail from './Detail.js';

function App(){

  let [shoes]=useState(data)
 

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<div>메인페이지임</div>}/>
        <Route path="/detail" element={<div>상세페이지임</div>}/>
        <Route path="/about" element={<div>어바웃페이지임</div>}/>
      </Routes>

      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div className="container">
        <div className="row">
          {
            shoes.map((a,i)=>{
              return (
                <Card shoes={shoes[i]} i={i+1} ></Card>
              )
            })
          }
        </div>
      </div>

      리액트 라우터1: 08:47

    </div>
  )
}

function Card(props){
  return (
    <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
          </div>
  )
}

export default App;
