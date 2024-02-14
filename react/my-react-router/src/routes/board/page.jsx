/* eslint-disable no-unused-vars */
import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import {fetchBoardList} from '~/lib/apis/board'
import { Link } from 'react-router-dom';

export default function BoardListPage() {
    const [boardList, setBoardList] = useState([]);

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