import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "~/lib/apis/auth";

const EXPAND_BREAKPOINT = "md";

export default function MyNavbar({ brandTitle, offCanvasTitle }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            const user = JSON.parse(userInfo);
            setUser(user);
        }
    }, []);

    const Logout = async () => {
        await logout(); // 로그아웃
        setUser(null); // user 다시 빈 객체로
        alert("로그아웃 되었습니다.")
        navigate('/');
        // window.location.reload();
    }

    return (
        <Navbar
            expand={EXPAND_BREAKPOINT}
            className="mb-3"
            sticky="top"
            bg="dark"
            variant="dark"
        >
            <Container fluid>
                <Navbar.Brand href="#">{brandTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
                <Navbar.Offcanvas
                    id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
                    aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
                            {offCanvasTitle || brandTitle}
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="flex-row-reverse">
                        <Nav
                            className={`justify-content-around flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0`}
                        >
                            {/* 조건부 랜더링 */}

                            {!user ? (
                                <>
                                    <Nav.Link href='/users/login' className="flex-grow-1 text-center border border-dark border-end-0">
                                        로그인
                                    </Nav.Link>
                                    <Nav.Link href='/users/signup'  className="flex-grow-1 text-center border border-dark">
                                        회원가입
                                    </Nav.Link>
                                </>
                            ):(
                                <>
                                    <Nav>{user.nickname}님</Nav>
                                    <Nav.Link onClick={Logout}  className="flex-grow-1 text-center border border-dark">
                                        로그아웃
                                    </Nav.Link>
                                </>
                            )}

                        </Nav>
                        <Nav className="justify-content-start flex-grow-1 pe-3">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/board">게시판</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}