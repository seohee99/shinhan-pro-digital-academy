import React, { useState, useCallback} from 'react'
import TodoList from './TodoList';


export type ITodolist = {
    id : string | number;
    title : string;
    color : string;
}

export type COLOR_MAP_TYPE = {
    color : string;
}

const COLOR_MAP:COLOR_MAP_TYPE[] = [
    {
        color: "#ff9292",
    },
    {
        color: "#ffa881",
    },
    {
        color: "#ffdb82",
    },
    {
        color: "#a9dd90",
    },
    {
        color: "#7cc39d",
    },
];

export default function ToDoApp() {
    const [inputText, setInputText] = useState<string>("");
    const [activeColor, setActiveColor]= useState<string>(COLOR_MAP[2].color);
    const [incrementCount, setIncrementCount] = useState<number>(3);

    const [todoList, setTodoList] = useState<ITodolist[]>([]);

    const deleteTodo = useCallback(
        (todoId :  ITodolist['id']) => {    
          setTodoList((prev) => {
            return prev.filter((todo) => {
              return todo.id !== todoId;
            });
          });
        },
        [setTodoList]
        
    );

    return (
        <div className='todo-app-typescript' style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            <div style={{border:'#d6d2c4 solid 10px', borderRadius:10,margin:50,padding:20, width:500,textAlign:'center'}}>
                
                <h3>ToDoApp</h3>
                
                <input type='text' value={inputText} style={{width:300, height:20, borderRadius:10,padding:10, margin:10, border:'solid 3px', borderColor:activeColor}} onChange={(e) => {setInputText(e.target.value);}} />
                <button onClick={ () => {const item = {id:incrementCount, title:inputText, color:activeColor};
                        setTodoList((prev) => prev.concat(item));
                        setIncrementCount((prev) => prev + 1); }}
                        style={{height:40, borderRadius:10, border:'#d6d2c4 solid 3px'}}>제출</button>
            </div>
            <div style={{display:'flex', gap:10, marginTop:20,justifyContent: 'center'}}>
                {COLOR_MAP.map((elem) => {
                    return (
                        <div onClick={ () => {setActiveColor(elem.color); }} key={elem.color} 
                            style={{width: 20, height:20, backgroundColor:elem.color, border: "1px solid", borderRadius : 5}}></div>
                    )
                })}
            </div>
            <div>
                <TodoList todoList={todoList} onDelete={deleteTodo}/>
            </div>
        </div>

    )
}
