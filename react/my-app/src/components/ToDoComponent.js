import React, {useState} from "react";

export default function ToDoComponent() {
    const [toDo,setTodo] = useState(""); // 현재 입력된 할 일
    const [toDos,setTodos] = useState([]); // 입력된 모든 할 일 

    const onSubmit = (e) => { // 할 일 등록 
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) =>[toDo, ...currentArray]) // toDo를 현재 배열의 앞에 등록
        setTodo("") // toDo를 다시 빈 문자열로 초기화 
    } 
    
    const onChange = (e) => { // 입력 필드 값이 변경될 때 마다 호출, 입력된 값을 toDO에 저장, 반영 
        setTodo(e.target.value)
    }
	return (
    <div>
        <h3>ToDo App</h3>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="입력하세요"  onChange={onChange} value={toDo}/>
            <button>등록하기</button>
        </form>
        <h3>ToDo List</h3>
        <div>
            {toDos.map((item,index)=><div style={{border:'brown solid', margin:20,padding:10, width:500,textAlign:'center'}} key={index}>{item}</div>)}
        </div>
    </div>
    )
}