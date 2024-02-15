import React, { useCallback, useState } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import { redirect, useNavigate } from 'react-router-dom';
import { login } from '~/lib/apis/auth';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onChangeEmail = useCallback((e)=>{
    setEmail(e.target.value);
  })

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  })

  const onSubmit = useCallback(async (e) =>{
    e.preventDefault();
    const response = await login({email, password});
    alert(`${response.nickname}님 환영합니다.`);
    navigate('/');
  }, [email, password])

  return (
    <Container style={{ display:'flex' ,justifyContent:"center", marginTop:100}}>
      <Card style={{ width: 500 , padding : 50, display:'flex' ,justifyContent:"center", alignItems:"center"}}>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={onChangeEmail}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="secondary" type="submit" style={{ display:'flex' ,justifyContent:"flex-end"}}>
            Submit
          </Button>
        </Form>
      </Card>
    </Container>
  );
}