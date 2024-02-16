import { React, useEffect, useState } from 'react';
import { Container, Card, Button, PencilFill, Trash3Fill , Form} from 'react-bootstrap';
import { deleteComment, fetchCommentList, updateComment } from '~/lib/apis/comment';
import CommentWritePage from './write/page';

export default function CommentListPage({ boardId }) {
  const [user, setUser] = useState(null);
  const [commentList, setCommentList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
  }, [])

  const onEdit = () => {
    setIsEdit(true);
  }

  const onDelete = (boardId) => {
    if (confirm("해당 댓글을 삭제하시겠습니까?")) {
      deleteComment({boardId});
      alert("삭제되었습니다.");
      window.location.reload();
    }
  }
  

  const onSubmit = (boardId) => {
    updateComment({ boardId,  content });
    setIsEdit(false);
  }


  return (
    <>
      <div>Comment</div>
      <Container>
        {commentList.map((comment, index) => {
          <Card key={index} style={{ width: '500px', 'backgroundColor': '#F5F5F5', 'border': 'none' }}>

            <Card.Body>
              <Card.Title>
                🏷️ 댓글 {index}
                {comment.author === user._id && (
                  <span style={{ float: 'right' }}>
                    {
                      !isEdit && <Button onClick={onEdit} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><PencilFill style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
                    }
                    <Button onClick={() => onDelete(comment._id)} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><Trash3Fill style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
                  </span>
                )
                }
              </Card.Title>

            </Card.Body>

          </Card>
        })}
      </Container>

      {user && (
            <CommentWritePage ></CommentWritePage>
            )}
    </>
  )
}
