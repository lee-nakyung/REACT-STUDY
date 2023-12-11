import './App.css';
import { useState } from 'react';

function App() {

  let [글제목,글제목변경]=useState(['남자 코트 추천', '여자 코드 추천', '잠실 우동 맛집']);
  let [따봉,따봉변경] = useState(0);

  function 함수(){
    console.log(1);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'red', fontSize:'15px'}}>블로그입니다</h4>
      </div>

      
      <button onClick={()=>{
        
        let copy=[...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순정렬</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <ㅔ
      </div>
    </div>
  );
}

export default App;
