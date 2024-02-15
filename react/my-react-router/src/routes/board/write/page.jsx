import React, { useCallback, useState } from 'react';
import { Modal, Button, Form, ModalFooter } from 'react-bootstrap';
import { createBoard } from '~/lib/apis/board';

export default function BoardWritePage({ show, handleClose, handleShow }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  })

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  })


  const onSubmit = useCallback(async (e) => {
    const response = await createBoard({ title, content });
  }, [title, content])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>게시글 작성하기</Modal.Title>
        </Modal.Header>
        <Form onSubmit={onSubmit}>
          <Modal.Body>
            <Form.Group className='mb-3'>
              <Form.Label>제목</Form.Label>
              <Form.Control type='text' placeholder='제목을 입력하세요' value={title} onChange={onChangeTitle} />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>내용</Form.Label>
              <Form.Control as='textarea' rows={10} placeholder='내용을 입력하세요' value={content} onChange={onChangeContent} />
            </Form.Group>

          </Modal.Body>
          <ModalFooter>
            <Button class="btn" style={{'backgroundColor': 'pink', 'border':'none'}} type='submit'>
              저장
            </Button>
            <Button class="btn" style={{'backgroundColor': 'black', 'border':'none'}}  onClick={handleClose}>
              닫기
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  )
}
