import React, { useCallback, useState } from 'react'
import { Card, Button, Form } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';

import { createComment } from '~/lib/apis/comment';

export default function CommentWritePage({index, boardId}) {
  const [content, setContent] = useState('');

  const onSubmit = useCallback(async (e) => {
    console.log(boardId)
    const response = await createComment({boardId, content})
    
    alert("댓글이 등록되었습니다.");
    window.location.reload();
    
  },[boardId, content])

  return (
    <>
      <Form onSubmit={onSubmit}>
      <Card style={{ width: '800px', 'backgroundColor': '#FFFFFF', 'border': 'solid' , 'marginTop':30, 'padding':20}}>
        <Card.Title>  
        ✏️ {index}번째 댓글 작성중 . . . 
        </Card.Title>
        <Card.Body>
          <Form.Control as='textarea' rows={5} placeholder='댓글을 입력하세요!' value={content} onChange={(e) => setContent(e.target.value)}></Form.Control>
        <Button class="btn" onClick={() => onSubmit()} style={{ 'backgroundColor': 'pink', 'border': 'none', 'float': 'right', 'margin': '10px' }}  >
          등록
        </Button>
        </Card.Body>
      </Card>
      </Form>
    </>
  )
}
