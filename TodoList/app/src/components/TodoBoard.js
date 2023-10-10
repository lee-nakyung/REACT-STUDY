import React from 'react'
import TodoItem from './TodoItem'

function TodoBoard(props){

    return (
        <div>
            <h1>Todo List</h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
            {/* 배열에 있는 내용을 가져옴 item으로 가져옴. */}
        </div>
    )
}
export default TodoBoard