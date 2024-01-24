import React , {useState} from "react";

// {toDos} props 받음, toDos : 할 일 목록을 담은 배열 
export default function ToDoItemComponent({toDos, deleteTodo, updateTodo}){
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (id, text) => {
        setEditId(id);
        setEditText(text);
    }

    const submitEdit = (id) => {
        updateTodo(id, editText);
        setEditId(null);
        setEditText('');
    }

    return(
        // toDos 배열의 각 항목에 대해 함수 실행 -> div 요소 생성 
        // map에 전달되는 콜백 함수는 value, index, array 인자를 받을 수 있음
        <div >
            {toDos.map((todo)=>
                <div style={{border:'solid 5px', borderColor:todo.color ,borderRadius:10,margin:20,padding:10, width:500,textAlign:'center'}} key={todo.id}>

                    {editId === todo.id ? (
                        <>
                            <input type="text" value={editText} onChange={ (e) => setEditText(e.target.value) } style={{width:100, height:15, borderRadius:10,padding:10, margin:5, border:'solid 3px', backgroundColor:'transparent'}}/>
                            <button onClick={ () => submitEdit(todo.id)}style={{height:30, borderRadius:10, border:'#d6d2c4 solid 3px', margin:5}}> 수정완료 </button>
                        </>
                    ) : (
                        <>
                            ✔️ {todo.text} &nbsp;
                            <button onClick={ () => startEdit(todo.id, todo.text) } style={{height:30, borderRadius:10, border:'#d6d2c4 solid 3px', margin:5}}> 수정하기</button>
                        </>
                    )}

                    <button onClick={ () => deleteTodo(todo.id)}  style={{height:30, borderRadius:10, border:'#d6d2c4 solid 3px', margin:5}}> 삭제하기 </button>
                
                </div>
            )}

        </div>
    )
}