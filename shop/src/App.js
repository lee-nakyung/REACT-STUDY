import './App.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import data from './data.js';
import Card from './Card';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [shoes]=useState(data)
  let navigate = useNavigate();
  
  return (
    <div className="App">

       
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
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
                    <Card shoes={shoes[i]} i={i}></Card>
                  )
                })
              }
            </div>
          </div>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>
       

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
