import React, { useCallback, useState } from "react";
// import './TodoApp.css';
import TodoList from "./TodoList";

const COLOR_MAP = [
  {
    color: "red",
  },
  {
    color: "blue",
  },
  {
    color: "white",
  },
  {
    color: "yellow",
  },
];

export default function TodoApp() {
  const [inputText, setInputText] = useState(""); // 텍스트 입력
  const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
  const [incrementCount, setIncrementCount] = useState(3);

  const [todoList, setTodoList] = useState([]);

  const deleteTodo = useCallback(
    (todoId) => {
      // setTodoList(todoList.filter(todo=>{
      //   return todo.id !== todoId
      // }))

      setTodoList((prev) => {
        return prev.filter((todo) => {
          return todo.id !== todoId;
        });
      });
    },
    [setTodoList]
  );

  return (
    <div className="todo-app">
      <div>
        <div>TodoApp</div>
      </div>

      <div>
        {/* input */}
        {/* onChange : e.target.value(input 태그에 입력되는 값)을 inputText로 저장(setInputText) */}
        <input
          type="text"
          value={inputText}
          style={{ backgroundColor: activeColor }}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />

        {/* 제출 button */}
        {/* item(id, 텍스트, 색상)을 이전의 TodoList에 넣음(concat), id 값은 하나 증가시켜줌 */}
        <button
          onClick={() => {
            const item = {
              id: incrementCount,
              title: inputText,
              color: activeColor,
            };
            setTodoList((prev) => prev.concat(item));
            setIncrementCount((prev) => prev + 1);
          }}
        >
          제출
        </button>
      </div>
      
      {/* 선택할 색상 출력(map 함수 사용) */}
      {/* 버튼 클릭 시 active color를 해당 색상으로 설정 */}
      {/* 배열을 렌더링할 때 key가 필요하다(없으면 에러) */}
      <div>
        {COLOR_MAP.map((elem) => {
          return (
            <div
              onClick={() => {
                setActiveColor(elem.color);
              }}
              key={elem.color}
              style={{
                width: 20,
                height: 20,
                backgroundColor: elem.color,
                border: "1px solid",
                borderRadius: 5,
                borderColor: "e9e9e9",
              }}
            ></div>
          );
        })}
      </div>
      {/* todoList 출력 */}
      {/* deleteTodo함수 전달 */}
      <div>
        <TodoList todoList={todoList} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
