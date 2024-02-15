// Signup.js
import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Signup({ onSignup }) {
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

      <Form.Group controlId="formBasicNickname">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" placeholder="Enter nickname" />
      </Form.Group>

      <Button variant="primary" onClick={onSignup}>
        회원가입
      </Button>
    </Form>
  );
}

export default Signup;
