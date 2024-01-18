import styled from "styled-components";
import "./App.css";
import ToDoButton from "./ToDoButton"
import { useState } from "react";
import { useEffect } from "react";

function App() {
  let Btn = styled.button`
    margin-top: 2rem;
    border: none;
    width: 5rem;
    background: ${(props) => props.bg};
    cursor: pointer;
  `;

  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    console.log(userInput); 
  }, [userInput]); 

  function todoContent(event) {
    setUserInput(event.target.value);
  }

  function addList() {
    if (userInput.trim() === "") {
      // 사용자가 아무 것도 입력하지 않았으면 아무것도 하지 않음
      return;
    }
  
    setList((prevList) => [...prevList, userInput]);
    setUserInput(""); // 항목을 추가한 후 입력 필드 초기화
  }
  

  function deleteList(index) {
    setList((prevList) => {
      return prevList.filter((_, i) => i !== index);
    });
  }
  

  return (
    <div className="App">
      <div className="buttonBox">
        <Btn bg="#FF9F9F">Add</Btn>
        <Btn bg="aliceblue">Save</Btn>
      </div>
      <button className="plusButton" onClick={addList}>
        Plus
      </button>
      {list.map((item, index) => {
        return (
          <ToDoButton
            key={index}
            title={item}
            index={index}
            addContent={todoContent}
            delete={() => deleteList(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
