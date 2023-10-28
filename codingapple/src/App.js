/* esLint-disable */

import './App.css';
import React, { useState } from 'react';

function App() {
  let [글제목, 글제목변경] = useState(['나 오늘 생일', '생일 다음날 ', '생일 다다음날']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle]=useState(0);


  return (
    <div className="App">
      <div className="black-nav"></div>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => { setModal(true); setTitle(i)}}>{글제목[i]}<span onClick={() => { 따봉변경(따봉 + 1); }}>👍</span>{따봉}</h4>
              <p>2월 17일 발행</p>
            </div>
          );
        })
      }

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>
      {
        modal === true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
    </div>
  );
}




function Modal(props) {
  
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{props.글제목변경(['님 오늘 생일', '생일 다음날', '생일 다다음날'])}}>글수정</button>
    </div>
  );
}

export default App;
