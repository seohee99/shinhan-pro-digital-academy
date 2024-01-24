import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ToDoPostComponent() {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error(error));
    }, []);

    const postUpdate = (postId) => {
        console.log(`Post ${postId} is edited.`);
    };
    
    const postDelete = (postId) => {
        console.log(`Post ${postId} is deleted.`);
    };


    return(
        <div>
            <hr/>
            <h3 style={{margin:50}}>API fetch를 이용한 게시판</h3>
            {posts.map(post => (
                <div  className="d-flex justify-content-center">
                <Card style={{width: 500, margin:15, border:'#d6d2c4 solid 5px'}} key={post.id}>
                    <Card.Header>
                        <Card.Text>{post.id}</Card.Text>
                        <Card.Title>{post.title}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{post.body}</Card.Text>
                        <Button  style={{ margin: '10px' , border:'#968c83 solid 5px', backgroundColor:'#968c83'}} onClick={() => postUpdate(post.id)}>수정</Button>
                        <Button   style={{ margin: '10px' , border:'#ff9292 solid 5px', backgroundColor:'#ff9292' }} onClick={() => postDelete(post.id)}>삭제</Button>
                    </Card.Body>

                </Card>
                </div>
            ))}
        </div>
    );
}