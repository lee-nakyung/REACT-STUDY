import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import {useState} from "react";
import data from "./data.js";

function App() {

  let [shoes]= useState(data)
  console.log(shoes[0].title);

  return (
    <div className="App">
    
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
            <Card shoes={shoes}></Card>
            <Card shoes={shoes}></Card>
            <Card shoes={shoes}></Card>
           
          </div>
        </div>
        
    

    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
      <h5>{props.shoes[0].title}</h5>
      <p>{props.shoes[0].price}</p>
    </div>  
    )
}

function Card2(props){
  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
      <h5>{props.shoes[0].title}</h5>
      <p>{props.shoes[0].price}</p>
    </div>  
    )
}

export default App;
