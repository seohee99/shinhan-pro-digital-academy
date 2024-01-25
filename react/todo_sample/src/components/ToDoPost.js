import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function ToDoPost() {
  const [posts, setPosts] = useState([]);

  // 버튼 클릭시 포스트를 불러오는 함수
  const fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <hr />
      <h3>ToDoPost</h3>
      {/* 버튼 추가 */}
      <Button onClick={fetchPosts} style={{margin: '10px'}}>GET 요청</Button>
      {posts.map((post) => (
        <div key={post.id}>
          <Container style={{ width: '100%', margin: '15px', border: '#d6d2c4 solid 5px' }}>
            <p>id : {post.id}</p>
            <p>title : {post.title}</p>
            <p>body : {post.body}</p>
          </Container>
        </div>
      ))}
    </div>
  );
}
