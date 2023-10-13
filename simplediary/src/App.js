import { useRef, useEffect, useState, useMemo } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import OptimizeTest from "./OptimizeTest";


// https://jsonplaceholder.typicode.com/comments

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments`).then((res)=>res.json());
    

    const initData =res.slice(0,20).map((it)=>{
      return{
        author: it.email,
        content:it.body,
        emotion:Math.floor(Math.random()*5)+1,
        created_date: new Date().getTime(),
        id:dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(()=>{
    getData();
  },[]);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    };

    dataId.current += 1;

    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter(
      (it) => it.id !== targetId
    );
    setData(newDiaryList);
  };

  const onEdit = (targetid,newContent)=>{
    setData(
      data.map((it)=> //map 내장함수 이용해서 새로운 배열을 만들어서 setdata에 전달
      it.id === targetid ? {...it, content:newContent}: it
      )
    );
  };

  const getDiaryAnalysis= useMemo(
    ()=>{
    

    const goodCount=data.filter((it)=>it.emotion>=3).length;
    const badCount=data.length-goodCount;
    const goodRatio=(goodCount/data.length)*100;
    return{goodCount,badCount,goodRatio};
  },[data.length]
  );

  const{goodCount,badCount,goodRatio}=getDiaryAnalysis;//값으로 사용해야함 함수랑 똑같은 역할 

  return (
    <div className="App">
      <OptimizeTest/>
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기: {data.length}</div>
      <div>기분 좋은 일기 갯수: {goodCount}</div>
      <div>기분 나쁜 일기 갯수: {badCount}</div>
      <div>기분 좋은 일기 비율: {goodRatio}</div>
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove} />
    </div>
  );
}

export default App;
