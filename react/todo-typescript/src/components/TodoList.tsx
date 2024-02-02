import React from 'react'
import TodoItem from './TodoItem';

export type ITodolist = {
    id : string | number;
    title : string;
    color : string;
}

export default function TodoList({todoList, onDelete} : {todoList : Array<ITodolist>, onDelete: (todoId: ITodolist['id']) => void}) {
  return (
    <div>
    <h3>TodoList</h3>
    <ul>
      {/* todoList 배열에서 하나씩 출력(map 사용) */}
      {todoList.map((todo, idx) => {
        // onDelete 함수 전달(앞서 deleteTodo전달한 것과 같은 역할)
        return (
          <TodoItem todo={todo} remove={() => {onDelete(todo.id); }} />
        );
      })}
    </ul>
    </div>  
  )
}
