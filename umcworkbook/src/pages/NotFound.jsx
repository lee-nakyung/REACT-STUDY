import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleMainPageClick = () => {
    navigate('/');
  };

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
        <h2>404 not found</h2>
        <p>해당 페이지는 없는 페이지입니다.</p>
        <p 
          style={{ color: "red", cursor: "pointer" }} 
          onClick={handleMainPageClick}
        >
          메인 페이지로 이동
        </p>
      </div>
    </div>
  );
};

export default NotFound;