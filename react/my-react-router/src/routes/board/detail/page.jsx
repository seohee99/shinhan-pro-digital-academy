import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BackspaceFill, Trash3Fill, PencilFill } from 'react-bootstrap-icons';
import { fetchBoard, updateBoard, deleteBoard } from '~/lib/apis/board';
import CommentListPage from '~/routes/comment/page';


export default function BoardDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { board, user } = location.state; // 전달 받은 데이터
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  
  const boardId = board._id
  // detail page 들어오면 board data 로딩해서 보여줌
  useEffect(()=>{
    const fetchdata = async () => {
      const data = await fetchBoard({boardId});
      setTitle(data.title);
      setContent(data.content);
    };
    fetchdata();
  },[boardId])

  const onEdit = () => {
    setIsEdit(true);
  }


  const onDelete = (boardId) => {
    if (confirm("해당 게시글을 삭제하시겠습니까?")) {
      deleteBoard({boardId});
      alert("삭제되었습니다.");
      navigate('/board');
      window.location.reload();
    }
  }
  

  const onSubmit = (boardId) => {
    updateBoard({ boardId, title, content });
    setIsEdit(false);
  }

  const goBack = () => {
    navigate('/board');
    // window.location.reload();

  }

  return (
      <>

      <Button onClick={() => goBack()} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}>
        <BackspaceFill style={{ fontSize: '1.5rem', color: 'gray' }} />
      </Button>
      <h1>Detail Page</h1>
      📃 Written By : {user.nickname}님
      {board.author === user._id && (
        <span style={{ float: 'right' }}>
          {
            !isEdit && <Button onClick={onEdit} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><PencilFill style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
          }
          <Button onClick={() => onDelete(boardId)} style={{ backgroundColor: 'white', border: 'none', padding: 0, marginRight: 10 }}><Trash3Fill style={{ fontSize: '1.5rem', color: 'gray' }} /></Button>
        </span>
      )
      }
      <Container>
        <Card style={{ width: '500px', margin: '30px' }}>
          <Card.Body>
            <Card.Title>
              {isEdit ?
                (
                  // 수정
                  <Form.Control type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                ) : (
                  // title 출력
                  title
                )
              }
            </Card.Title>

            <Card.Body>
              {isEdit ?
                (
                  // 수정
                  <Form.Control as='textarea' rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
                ) : (
                  // content 출력
                  content
                )
              }
            </Card.Body>
            {isEdit && (
              <span>
              <Button onClick={() => onSubmit(boardId)} variant='primary'>완료</Button>
              <Button onClick={() => setIsEdit(false)} variant='secondary'>취소</Button>
              </span>
            )}

          </Card.Body>
        </Card>
      </Container>

      <Container>
          <CommentListPage board = {board} ></CommentListPage>

      </Container>
    </>
  )
}
