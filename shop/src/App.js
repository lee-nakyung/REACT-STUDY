import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from "react";
import data from './data.js';
import Card from './Card';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';
import axios from "axios";
import Cart from './routes/Cart';



function App() {

  let [shoes, setShoes]=useState(data)
  let[재고]=useState([10,11,12])

  let navigate = useNavigate();
  let [button, setButton]=useState(2);

  return (
    <div className="App">

       
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/:id')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
    <Route path="/" element={
      <>
        <div className='main-bg'></div>
        <div className="container">
          <div className="row">
            {
              shoes.map((a,i)=>{
                return (
                  <Card shoes={shoes[i]} i={i} key={i}></Card>
                )
              })
            }
          </div>
        </div>
        <button onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data3.json').then((result)=>{
            console.log(result.data);
            let copy= [...shoes, ...result.data];
            setShoes(copy);
            setButton(button=>button+1);
          }); 
          axios.post('/sdfsdfs', {name: "na"});         
        }}>버튼</button>
      </>
    }/>
    <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
    <Route path="/cart" element={<Cart/>} />
</Routes>

    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
