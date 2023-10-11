import './App.css';
import MyHeader from './MyHeader';
import React from "react";
import Counter from './counter';
import Container from './Container';


function App() {
  
  const number=5;

  const counterprops ={
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    InitialValue:5,
  }

  return (
    <Container>
    <div>
      <Counter {...counterprops}/>
    </div>
      
    </Container>
  );
}

export default App;
