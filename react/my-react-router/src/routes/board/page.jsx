/* eslint-disable no-unused-vars */
import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import {fetchBoardList} from '~/lib/apis/board'
import { Link, useNavigate } from 'react-router-dom';
import BoardWritePage from './write/page';

export default function BoardListPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [boardList, setBoardList] = useState([]);
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // localStorage에서 user 정보 불러오기
    useEffect(()=>{
        const userInfo = localStorage.getItem('user');
        if (userInfo) {
            const user = JSON.parse(userInfo);
            setUser(user);
        }
    }, []);

    // board 리스트 불러오기 
    useEffect( ()=> {
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
                <Button variant="primary" onClick={handleShow} style={{ float: 'right', margin: '10px' }}>
                    글 작성하기
                </Button>

                <BoardWritePage show={show} handleClose={handleClose} handleShow={handleShow} />
                </>
            )}

            <Container>
                {boardList.map((board, index) => (
                    <Card key={index} style={{ width: '500px', margin: '30px' }}>
                        <Card.Body>
                            <Card.Title>{board.title}</Card.Title>
                            <Card.Body>{board.content}</Card.Body>
                            <Link to={`/board/${board._id}`}  state= {{board: board}} key={board._id}>
                                <Button variant='primary' className='text-decoration-none'>자세히 보기</Button>
                            </Link>                        
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
}