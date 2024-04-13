import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false); //안보일때

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
}

function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null; //false이면 아무것도 렌더링하지 않음

  return (
    <>
      <h2>모달입니다 뿅</h2>
      <button onClick={closeModal}>닫기</button>
    </>
  );
}

export default App;
