import React, { useEffect, useState } from 'react';
import { Container, Card, Button,Form } from 'react-bootstrap';
import { Pencil, Trash3 } from 'react-bootstrap-icons';
import { deleteComment, fetchCommentList, updateComment } from '~/lib/apis/comment';
import CommentWritePage from './write/page';
import formatDate from '~/lib/hooks/FormattedDate';

export default function CommentListPage({ board }) {
  console.log("boardId :: ", board._id)
  const [user, setUser] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState('');
  const boardId = board._id
  console.log("boardID ::", boardId)

  // localStorage에서 user 정보 불러오기
  useEffect(() => {
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCommentList({ boardId });
      setCommentList(data);
    };
    fetchData();
  }, [boardId])

  const onEdit = () => {
    setIsEdit(true);
  }

  const onDelete = (commentId) => {
    if (confirm("해당 댓글을 삭제하시겠습니까?")) {
      deleteComment({ commentId });
      alert("삭제되었습니다.");
      window.location.reload();
    }
  }

  const onSubmit = (boardId) => {
    updateComment({ boardId, content });
    setIsEdit(false);
  }

  return (
    <>
      <div>Comment</div>
      <Container>

        {commentList.map((comment, index) => {
          const createdAt = formatDate(comment.createdAt);
          const updatedAt = formatDate(comment.updatedAt);
          return (
            <Card key={index} style={{ width: '800px', 'backgroundColor': '#F5F5F5', 'border': 'none' , 'margin':15}}>

              <Card.Body>
                <Card.Title>
                  🏷️ 댓글 {index + 1} 
                  {comment.author === user._id && (
                    <span style={{ float: 'right' }}>
                      {
                        !isEdit && <Button onClick={onEdit} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><Pencil style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
                      }
                      <Button onClick={() => onDelete(comment._id)} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><Trash3 style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
                    </span>
                  )
                  }
                </Card.Title>
                <Card.Body>
                  {isEdit ? (
                    <Form.Control as='textarea' rows={5} value={content} onChange={(e) => setContent(e.target.value)}></Form.Control>
                  ):(
                    <>
                  <div style={{'padding' : 10}}> Written By : {user.nickname} &nbsp; &nbsp; 📌 등록일 : {createdAt} &nbsp; &nbsp; 📌 수정일 : {updatedAt} </div>
                  
                  <div style={{'padding' : 10}}>  {comment.content} </div>
                  </>
                  )}
                </Card.Body>

              </Card.Body>

            </Card>
          )
        })}
      </Container>

      <Container>
        {user && (
          <CommentWritePage boardId={boardId} index={commentList.length + 1} ></CommentWritePage>
        )}
      </Container>
    </>
  )
}
