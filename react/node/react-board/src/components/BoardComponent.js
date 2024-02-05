import React, {useEffect, useState} from "react";
import axios from "axios";
import CommentComponent from "./CommentComponent";


export default function BoardComponent() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/board/");
                console.log(response.data);
                setBoards(response.data);
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h3>Board</h3>
        

        {boards.map(board => (
            <div key={board._id} style={{border:"none", borderRadius:20, backgroundColor : "#F5F5F5", boxShadow:"2px 2px 2px 2px rgb(80, 71, 71,0.3)" ,margin:20, padding:20, textAlign:"center", width:"60%"}}>
                <h3>{board.title}</h3>
                <div>{board.content}</div>
                <div>{board.author || ""} </div>
                <div> {board.createdAt}</div>
                
                <CommentComponent boardId={board._id}></CommentComponent>
            </div>
        ))}
        </div>
    )
}