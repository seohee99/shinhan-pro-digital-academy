import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

export default function BoardDetailPage() {

  const location = useLocation();
  const board = location.state.board; // 전달 받은 데이터
  
  return (
    <>
    <h1>Detail Page</h1>
    <Container>
    <Card style={{ width: '500px', margin: '30px' }}>
                <Card.Body>
                    <Card.Title>{board.title}</Card.Title> {/* 게시글 제목 출력 */}
                    <Card.Body>{board.content}</Card.Body> 
                </Card.Body>
            </Card>
    </Container>
    </>
  )
}
