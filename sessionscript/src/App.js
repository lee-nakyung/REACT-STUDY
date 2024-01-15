import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [isOpen, setOpen] = useState(false);

  const openModal=()=>{
    setOpen(true);
  }

  const closeModal=()=>{
    setOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; //false 이면 아무것도 렌더링 하지 않음

  return (
    <>
      <h2>모달입니다.</h2>
      <p>아기사자 여러분 안녕하세요.</p>
      <button onClick={onClose}>닫기</button>
     </>
  );
}


export default App;
