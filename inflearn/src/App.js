import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState } from 'react';
import { useRef } from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: '이나경',
//     content: '하이에요',
//     emotion: 1,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: '홍길동',
//     content: '하이에요',
//     emotion: 2,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: '이훈이',
//     content: '하이에요',
//     emotion: 3,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: '김철수',
//     content: '하이에요',
//     emotion: 4,
//     created_data: new Date().getTime(),
//   },
//   {
//     id: 5,
//     author: '김맹구',
//     content: '하이에요',
//     emotion: 5,
//     created_data: new Date().getTime(),
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
