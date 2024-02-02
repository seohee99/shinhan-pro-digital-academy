import React, { useEffect, useState } from "react";

export type ITodolist = {
    id : string | number;
    title : string;
    color : string;
}

export default function TodoItem({todo, remove} : {todo : ITodolist, remove: () => void}) {
    const [mode, setMode] = useState<string>("normal");

    const [inputText, setInputText] = useState<string>("");
    useEffect(() => { setInputText(todo.title); }, [todo]);    
    
    return (
        <div style={{border:'solid 5px', borderColor:todo.color ,borderRadius:10,margin:20,padding:10, width:500,textAlign:'center'}}>
              ✔️ {todo.title}

              <button onClick={(e) => { remove(); }} style={{ cursor: "pointer", height:30, borderRadius:10, border:'#d6d2c4 solid 3px', margin:5 }}> 삭제 </button>
        </div>
      );
}
