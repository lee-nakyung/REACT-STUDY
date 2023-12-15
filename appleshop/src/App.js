import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from "react";
import data from "./data.js";
import {Routes, Route, Link} from 'react-router-dom'
import Detail from './Detail.js';

function App() {

  let [shoes]= useState(data)
 

  return (
    <div className="App">

      <Routes>
        <Route path="/" element = {<div>메인페이지임</div>}/>
        <Route path="/detail" element = {<div>상세페이지임</div>}/>
      </Routes>
    
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
            <Nav.Link>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    

      <div className='main-bg'></div>
        <div className="container">
          <div className="row">
            {/* <Card shoes={shoes[0]} i={1}></Card>
            <Card shoes={shoes[1]} i={2}></Card>
            <Card shoes={shoes[2]} i={3}></Card> */}
           {
            shoes.map((a,i)=>{
              return (
                <Card shoes = {shoes[i]} i={i+1}></Card>
              )
            })
           }
          </div>
        </div>
        
    

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes'+props.i+'.jpg'} width="80%"/>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </div>  
    )
}

export default App;
