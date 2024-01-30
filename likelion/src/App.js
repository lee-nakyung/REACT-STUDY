import TodoButton from './components/TodoButton';
import { useFetch } from './useFetch';
import { useState } from 'react';

const baseUrl="https://jsonplaceholder.typicode.com"

function App() {

  const [list, setList]=useState([]);

  function updateList(itemId, newContent){
    setList(prevList)=>{
      prevList.map({item}=>{
        item.id===itemId ? (...item,content: newContent):
      })
    }
  }

  function addList(){
    const newItem = {
      id: Date.now(),
      content:""
    };
    setList(prevList=>[...[prevList,newItem]]);
  }

  function deleteList(itemId){
    setList((prevList)=>{
      return prevList.filter((item)=> item.id !==itemId);
    })
  }

    return (
      <>
      <button className="plusbutton" onClick={addList}>
        Plus
      </button>
      {list.map(item)=>{
        return (
          <TodoButton>
            key=({item.id})
            item={item}
            updateContent={updateList}
            deleteList={()=> deleteList(item.id)}
          </TodoButton>
        )
      }}
      </>
}

export default App;
