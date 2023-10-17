import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';

function App() {

 
  return (
    <BrowserRouter>
    <div className="App">
      <h2>app.js</h2>

      <MyButton text= {"버튼"} 
      onClick={()=> alert("버튼 클릭")}
      type={"positive"}/>
  
      <Routes> /*routes 바깥의 부분은 그대로 나온다. */
        <Route path='/' element ={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit' element ={<Edit/>}/>
        <Route path='/diary/:id' element ={<Diary/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
