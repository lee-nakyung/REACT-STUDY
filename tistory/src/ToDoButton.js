import deleteImg from "./images/info.png"


export default function ToDoButton(props) {

  return (
    <div className="toDoList">
      <input type="checkbox" id="select"></input>
      <input type="text" id="field" placeholder="내용을 입력해주세요." onChange={props.addContent}></input>
      <button className="minusButton" onClick={()=>props.delete(props.index)}>
        <img src={deleteImg} alt="삭제 이미지"></img>
      </button>

      
    </div>
  );
}
