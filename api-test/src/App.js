import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import UserData from './UserData';

function App() {

  const [users, setUsers]=useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
      console.log(response)
      setUsers(response.data);
    })
  },[]);

  useEffect(()=>{
    console.log(users);
  },[users])

  return (
    <div>
      <UserData users={users}/>
    </div>
  )
}

export default App;
