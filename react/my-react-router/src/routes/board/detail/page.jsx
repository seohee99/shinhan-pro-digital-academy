import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { PersonFill, EyeFill, Trash3Fill,PencilFill } from 'react-bootstrap-icons';

export default function BoardDetailPage() {

  const location = useLocation();
  const { board, user } = location.state; // 전달 받은 데이터

  return (
    <>
      <h1>Detail Page</h1>
      <Container>
        <Card style={{ width: '500px', margin: '30px' }}>
          <Card.Body>
            <Card.Title>
              {board.title}
              {board.author === user._id && (
                <span style={{float: 'right',}}>
                  <Button style={{backgroundColor:'white', border : 'none'}}><PencilFill style={{   fontSize: '1.5rem', color: 'gray' }} /></Button>

                  <Button style={{backgroundColor:'white', border: 'none'}}><Trash3Fill style={{  fontSize: '1.5rem', color: 'gray' }} /></Button>
                </span>
              )
              }
            </Card.Title>
            <Card.Body>{board.content}</Card.Body>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
