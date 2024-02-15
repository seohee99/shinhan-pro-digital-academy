import React, { useCallback, useEffect, useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap';
import { signup } from '~/lib/apis/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeEmail = useCallback( (e) => {
    setEmail(e.target.value);
  }, []);

  const onChangePassword = useCallback( (e) => {
    setPassword(e.target.value);
  }, []);

  const onChangeNickname = useCallback( (e) => {
    setNickname(e.target.value);
  }, []);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await signup({email, password, nickname});
    alert("회원가입이 성공적으로 되었습니다.");
    window.location.reload();
  }, [email, password, nickname])


  return (
    <Container style={{ display:'flex' ,justifyContent:"center", marginTop:100}}>
      <Card style={{ width: 500 , padding : 50, display:'flex' ,justifyContent:"center", alignItems:"center"}}>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNickname">
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" placeholder="Nickname" value={nickname} onChange={onChangeNickname}/>
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
