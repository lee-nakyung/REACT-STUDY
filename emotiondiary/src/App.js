import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, { useEffect } from 'react';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import { useReducer, useRef } from 'react';

const reducer= (state,action)=>{
  let newState=[];
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE':{
      newState=[action. data, ...state];
      break;
      }
    case 'REMOVE':{
      newState=state.filter((it)=>it.id!==action.targetId);
      break;
    }
    case 'EDIT':{
      newState=state.map((it)=>it.id ===action.data.id?{...action.data}: it);
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary",JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext= React.createContext();
export const DiaryDispatchContext= React.createContext();


function App() {

  const [data,dispatch]= useReducer(reducer,[]);

  useEffect(() => {
    const localData = localStorage.getItem('diary');
    if (localData) {
        const diaryList = JSON.parse(localData).sort(
          (a, b) => parseInt(b.id) - parseInt(a.id)
        );

        dataId.current =parseInt(diaryList[0].id)+1;

        console.log(data);
        dispatch({type:"INIT",data:diaryList});
    }
}, []);

  const dataId = useRef(6);

  //oncreate
  const onCreate = (date,content,emotion)=>{
    dispatch({
      type:"CREATE",
      data:{
      id:dataId.current,
      date:new Date(date).getTime(),
      content,
      emotion,
    },
  });
  dataId.current+=1;
  };

  //remove
  const onRemove=(targetId)=>{
    dispatch({type:"REMOVE",targetId});
  }

  //onEdit
  const onEdit = (targetId,date,content,emotion)=>{
    dispatch({
      type:"EDIT",
      data:{
        id:targetId,
        date:new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
 
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
      value={{
        onCreate,
        onEdit,
        onRemove,
      }}>
    <BrowserRouter>
    <div className="App">
      <Routes> /*routes 바깥의 부분은 그대로 나온다. */
        <Route path='/' element ={<Home/>}/>
        <Route path='/new' element={<New/>}/>
        <Route path='/edit/:id' element ={<Edit/>}/>
        <Route path='/diary/:id' element ={<Diary/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
