/* eslint-disable */

import './App.css';
import React, { useState } from 'react';

function App() {
  let post = "강남 우동 맛집";
  let [title, setTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [titles, setTitles]=useState(0);
  let [blank, setBlank]=useState('');

  [1, 2, 3].map(function () {
    return '1233211';
  });

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {
        title.map(function(a,i){
          return (
            <div className="list" key="0">
              <h4 onClick={()=>{setModal(true)}}>{title[i]}
              <span onClick={()=>{setLike(like+1)}}>👍</span>{like}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy=[...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
              <hr/>
              </div>
          )
        })
      }

      <input onChange={(e)=>{
        setBlank(e.target.value);
      }}/>
      <button onClick={()=>{
        let copy=[...title];
        copy.unshift(blank);
        setTitle(copy);
      }}>글발행</button>

     {
      modal == true? <Modal titles={titles} color="orange" title={title}/>:null
     }

    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h4>{props.title[props.titles]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  );
}

export default App;
