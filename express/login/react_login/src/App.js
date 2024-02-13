import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Board from './components/Board';
import { Button, Modal } from 'react-bootstrap';
import React, {useState} from 'react';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
 
  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setShowSignup(false);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {isLoggedIn ? (
        <Button variant='primary' onClick={handleLogout}>
          로그아웃
        </Button>
      ) : (
        <>
        <Button variant='primary' onClick={handleShowLogin}>
          로그인
        </Button>
        <Button variant='primary' onClick={handleShowSignup}>
          회원가입
        </Button>

        <Modal show={showLogin} onHide={handleCloseLogin}>
          <Login onLogin={handleLogin} />
        </Modal>

        <Modal show={showSignup} onHide={handleCloseSignup}>
          <Signup onSignup={handleSignup} />
        </Modal>
        </>
      )}
    </div>
  );
}

export default App;
