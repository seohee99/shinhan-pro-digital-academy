import React, {useEffect, useState} from "react";
import axios from "axios";


export default function CommentComponent({boardId}) {
  const [comments, setComments] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get(`/comment/${boardId}`);
        setComments(response.data);
        console.log(response.data)
        console.log(comments);
      } catch (error) {
        console.error(error);
      } 
    }
    fetchData();
  }, [boardId]);
  if (!comments || comments.length === 0) {
    return null;
  }  

  return (
    <div>
      <hr style={{width:"100%", margin:10, borderWidth:"3px", borderStyle:"dotted"}} />

    <div >
      {comments.map(comment => (
        <div key={comment._id} style={{border:"none", borderRadius:20, backgroundColor:"#DCDCDC",margin:20, padding:20, textAlign:"center"}}>
          <div>{comment.title}</div>
          <div>{comment.content}</div>
          <div>{comment.writer}</div>
          <div>{comment.createdAt}</div>
        </div>
      ))}
    </div>
    </div>
  )
}
