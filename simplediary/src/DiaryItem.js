import {useEffect, useRef, useState,React} from 'react';
// react hooks
const DiaryItem = ({
  onRemove,
  id,
  author, //두개는 함수, 두개는 데이터 
  onEdit,
  content,
  emotion,
  created_date
}) => {

  useEffect(()=>{
    console.log(`${id}번 째 아이템 렌더!`);
  });

  const [isEdit, setIsEdit]=useState(false); //true 와 false boolean 형태를 갖게된다.
  const toggleIsEdit =()=>setIsEdit(!isEdit); //토글 반전연산 isedit이 true이면 수정중이라고 간주해서 수정 폼 띄움. 

  const [localContent, setLocalContent]=useState(content);
  const localContentInput = useRef();


  const handleRemove =() => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  }

  const handleEdit = () =>{

    if(localContent.length < 5){ //길이가 5 이하이면 수정 불가능
      localContentInput.current.focus();
      return;
    }

    if(window.confirm(`${id}번 째 일기를 수정하시겠습니까? `)){
      onEdit(id,localContent);
      toggleIsEdit();
    }
    
  }

  const handleQuitEdit=()=>{
    setIsEdit(false);
    setLocalContent(content);
  }
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
      {isEdit ? (
      <>
      <textarea ref= {localContentInput} value={localContent} onChange={(e)=> setLocalContent(e.target.value)} />
      </>
      ):(
      <>{content}</>
    )}
    </div>

    {isEdit ? (
      <>
    <button onClick={handleQuitEdit}>수정 취소</button>
    <button onClick={handleEdit}>수정 완료</button>
    </>
    ):(
      <>
      <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleIsEdit}>수정하기</button>
      </>
    )}
    </div>
  );
};

export default React.memo(DiaryItem);
