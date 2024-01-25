import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todoList, onDelete }) {
  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {/* todoList 배열에서 하나씩 출력(map 사용) */}
        {todoList.map((todo, idx) => {
          // onDelete 함수 전달(앞서 deleteTodo전달한 것과 같은 역할)
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              remove={() => {
                onDelete(todo.id);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
