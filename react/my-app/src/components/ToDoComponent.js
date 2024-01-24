import React, {useState} from "react";
import ToDoItemComponent from "./ToDoItemComponent";

export default function ToDoComponent() {
    const [toDo,setTodo] = useState(""); // 현재 입력된 할 일
    const [toDos,setTodos] = useState([]); // 입력된 모든 할 일 
    const [color, setColor] = useState('black') // 색상 

    const onSubmit = (e) => { // 할 일 등록 
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) =>[{text: toDo, id: Date.now(), color:color}, ...currentArray]) // toDo를 현재 배열의 앞에 등록
        setTodo("") // toDo를 다시 빈 문자열로 초기화 
    } 
    
    const onChange = (e) => { // 입력 필드 값이 변경될 때 마다 호출, 입력된 값을 toDO에 저장, 반영 
        setTodo(e.target.value)
    }

    // 삭제
    const deleteTodo = (id) => {
        setTodos(toDos.filter(todo => todo.id !== id));
    }

    // 수정
    const updateTodo = (id, newText) => {
        setTodos(toDos.map(todo => todo.id === id ? {...todo, text:newText} : todo));
    }

	return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
        {/* ToDo 등록 */}
        {/* onChange함수로 입력된 값 저장, 등록 버튼 누르면 onSubmit 동작 */}
        <div style={{border:'#d6d2c4 solid 10px', borderRadius:10,margin:50,padding:20, width:500,textAlign:'center'}}>
            <h3>ToDo App</h3>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="입력하세요"  onChange={onChange} value={toDo} style={{width:300, height:20, borderRadius:10,padding:10, margin:10, border:'solid 3px', borderColor:color}}/>
                <button style={{height:40, borderRadius:10, border:'#d6d2c4 solid 3px'}}>등록하기</button>
                <div style={{display:'flex', gap:10, marginTop:20,justifyContent: 'center'}}>
                    <button onClick={ (e) => {e.preventDefault (); setColor('#ff9292')}  } style={{borderRadius:10, width:15, height:15, backgroundColor:'#ff9292'}}></button>
                    <button onClick={ (e) => {e.preventDefault (); setColor('#ffa881')}  } style={{borderRadius:10, width:15, height:15, backgroundColor:'#ffa881'}}></button>
                    <button onClick={ (e) => {e.preventDefault (); setColor('#ffdb82')}  } style={{borderRadius:10, width:15, height:15, backgroundColor:'#ffdb82'}}></button>
                    <button onClick={ (e) => {e.preventDefault (); setColor('#a9dd90')}  } style={{borderRadius:10, width:15, height:15, backgroundColor:'#a9dd90'}}></button>
                    <button onClick={ (e) => {e.preventDefault (); setColor('#7cc39d')}  } style={{borderRadius:10, width:15, height:15, backgroundColor:'#7cc39d'}}></button>
                </div>
            </form>
        </div>

        {/* ToDo 출력 */}
        {/* ToDoItemComponent로 toDos props 전달 */}
        {/* deleteTodo, updateTodo도 전달 */}
        <h3>ToDo List</h3>
        <ToDoItemComponent toDos={toDos}  deleteTodo={deleteTodo} updateTodo={updateTodo}/> 

    </div>
    )
}