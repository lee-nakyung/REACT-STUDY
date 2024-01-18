import deleteImg from "./images/info.png";
import { useState } from "react";
import { useEffect } from "react";

// ToDoButton 컴포넌트에 추가
export default function ToDoButton(props) {
  const [inputValue, setInputValue] = useState(props.title);

  useEffect(() => {
    setInputValue(props.title);
  }, [props.title]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    props.addContent(event); // 부모 컴포넌트의 addContent 함수를 호출하여 상태 업데이트
  };

  return (
    <div className="toDoList">
      <input type="checkbox" id="select"></input>
      <input 
        type="text" 
        id="field" 
        placeholder="내용을 입력해주세요." 
        onChange={handleInputChange}
        value={inputValue} 
      ></input>
      <button className="minusButton" onClick={() => props.delete(props.index)}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>
    </div>
  );
}

