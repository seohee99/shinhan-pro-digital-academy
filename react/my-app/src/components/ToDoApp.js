import React, { useState } from 'react';
import './TodoApp.css';
import TodoList from './TodoList';

const COLOR_MAP = [{
  color: 'red',
}, {
  color: 'blue',
}, {
  color: 'white'
}, {
  color: 'yellow'
}]

export default function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
  const [todoList, setTodoList] = useState([{
    title: 'todo-1',
    color: 'red'
  }, {
    title: 'todo-2',
    color: 'blue'
  }]);
  return (
    <div className="todo-app">
      <div>
        <div>TodoApp</div>
      </div>
      
      <div>
        <input type="text" value={inputText} style={{backgroundColor:activeColor}} onChange={e=>{
          setInputText(e.target.value);
        }} />
        <button onClick={()=>{
          const item = inputText;
          setTodoList(prev=>prev.concat(item))
        }}>제출</button>
      </div>

      <div>
        {COLOR_MAP.map(elem=>{
          return (
            <div onClick={()=>{
              setActiveColor(elem.color);
            }} style={{width:20, height:20, 
                        backgroundColor: elem.color, border: '1px solid',
                        borderRadius: 5, borderColor: 'e9e9e9'
                        }}>
              
            </div>
          )
        })}
      </div>
      
      <div>
        {todoList.map(todo=>{
          return (
            <div style={{backgroundColor: todo.color}}>
              {todo.title}
            </div>
          )
        })}
        {/* <TodoList /> */}
      </div>
    </div>
  )
}