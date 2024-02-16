import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';


export default function CommentWritePage() {
  return (
    <>
      <Button class="btn" style={{ 'backgroundColor': 'pink', 'border': 'none', 'float': 'right', 'margin': '10px' }} onClick={handleShow} >
                        글 작성하기
                    </Button>
    </>
  )
}
