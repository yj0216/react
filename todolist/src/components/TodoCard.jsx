import React, { useState } from 'react'
import TodoList from "../components/TodoList";

let nextId = 0;

export default function TodoCard() {
  const [todos,setTodos] = useState([]);
  const [newText,setNewText] = useState("");
  const addList = () => {
            //input 비우기
            setNewText('');
            //input 창에 입력한 값을 배열에 추가하기
            setTodos([
            ...todos,
            {
                id: nextId++,
                text: newText,
            },
            ]);
        };
  return (
    <div className='body'>
    <div className='todolist'>
      <div className='flexbox'>
      <h3 className='title'>오늘 할 일</h3>
      <div className='inputbox'>
        <input placeholder='오늘 할 일' type='text' value={newText} onChange={(e)=>setNewText(e.target.value)} />
        <button name='create' onClick={addList}></button>
      </div>
      <div className='addlist'>
        <ul>
        {todos.map((todos)=>
        <TodoList
         id={todos.id} 
         text={todos.text}
         />
         )}
        </ul>
        </div>
      </div>
      </div>
      </div>
    );
}
