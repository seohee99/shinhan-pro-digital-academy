/* eslint-disable no-unused-vars */
import { React, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchBoardList } from '~/lib/apis/board'
import { Link, useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { PersonFill,  EyeFill } from 'react-bootstrap-icons';
import BoardWritePage from './write/page';

export default function BoardListPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [boardList, setBoardList] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // localStorage에서 user 정보 불러오기
    useEffect(() => {
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            const user = JSON.parse(userInfo);
            setUser(user);
        }
    }, []);

    // board 리스트 불러오기 
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBoardList(); // api 호출
            setBoardList(data); // 가져온 데이터 boardList에 저장
        };
        fetchData();
    }, [])

    return (
        <>
            <h1>My Board</h1>

            {user && (
                <>
                    <Button class="btn" style={{ 'backgroundColor': 'pink', 'border': 'none', 'float': 'right', 'margin': '10px' }} onClick={handleShow} >
                        글 작성하기
                    </Button>
                    <BoardWritePage show={show} handleClose={handleClose} handleShow={handleShow} />
                </>
            )}

            <Container style={{ 'margin': 10, }}>
                {boardList.map((board, index) => (
                    <Link to={`/board/${board._id}`} state={{ board: board , user : user}} key={board._id} onClick={() => window.scrollTo(0, 0)}>
                        <Button className='text-decoration-none'
                            style={{margin: 50, padding: 0, border: 'none', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',transition: 'transform 0.3s',}}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} // 마우스 오버 시 확대
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // 마우스 아웃 시 원래 크기로
                        >
                            <Card key={index} style={{ width: '500px', 'backgroundColor': '#F5F5F5', 'border': 'none' }}>
                                <Card.Body >
                                    <Card.Title>
                                        {board.title}
                                        {board.author === user._id ? (
                                            <PersonFill style={{ float: 'right', fontSize: '1.5rem', color: 'gray' }} /> // 아이콘 추가
                                        ) : (
                                            <EyeFill style={{ float: 'right', fontSize: '1.5rem', color: 'gray' }} /> // 아이콘 추가

                                        )}

                                    </Card.Title>
                                    <Card.Body>{board.content}</Card.Body>
                                </Card.Body>
                            </Card>
                        </Button>
                    </Link>
                ))}
            </Container>

            
        </>
    );
}