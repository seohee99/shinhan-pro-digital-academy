// Login.js
import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Login({ onLogin, onShowSignup }) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" onClick={onLogin}>
        로그인
      </Button>
      <Button variant="secondary" onClick={onShowSignup} style={{ marginLeft: '10px' }}>
        회원가입
      </Button>
    </Form>
  );
}

export default Login;
