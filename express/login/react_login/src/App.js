import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Modal, Card, Alert, Container, Row, Col } from 'react-bootstrap';
import Board from './components/Board';
import Login from './components/Login'; // 변경된 컴포넌트 이름
import Signup from './components/Signup'; // 변경된 컴포넌트 이름

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false); // 새로운 상태 변수

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleHideSignup = () => {
    setShowSignup(false);
  };

  const handleSignup = () => {
    setShowSignup(false);
    setSignupSuccess(true); // 상태 변경
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Row>
        <Col>
          {isLoggedIn ? (
            <Board />
          ) : (
            <>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Login onLogin={handleLogin} onShowSignup={handleShowSignup} />
                </Card.Body>
              </Card>

              <Modal show={showSignup} onHide={handleHideSignup}>
                <Card>
                  <Card.Body>
                    <Signup onSignup={handleSignup} />
                    {signupSuccess && <div>회원 가입에 성공하셨습니다.</div>} {/* 성공 메시지 */}
                  </Card.Body>
                </Card>
              </Modal>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;