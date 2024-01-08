import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios'
import Cart from './routes/Cart.js'


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count]=useState([10,11,12]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card key={i} shoes={a} i={i + 1} />
                })}
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data)
                let copy=[...shoes, ...result.data];
                setShoes(copy);
              })

              axios.get('/url1')

            }}>버튼</button>
          </>
        } />
        
        <Route path="/detail/:id" element={
          <Detail shoes={shoes}/>
        }/>

        <Route path="/cart" element = {<Cart/>}/>
      </Routes>
    </>
  )
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} width="80%" alt={props.shoes.title} />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
