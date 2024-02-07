import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Form, Button } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [complete, setComplete] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios.get('/api/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const createTodo = () => {
    axios.post(`/api/todos/${userId}`, {
      content,
      category,
      complete
    })
    .then(response => {
      setTodos([...todos, response.data]);
      setContent("");
      setCategory("");
      setComplete(false);
    })
    .catch(error => {
      console.error(error);
    });
  };

  const updateTodo = (id) => {
    const todo = todos.find(todo => todo._id === id);
    axios.put(`/api/todos/${id}`, {
      content: todo.content,
      category: todo.category,
      complete: todo.complete
    })
    .then(response => {
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    })
    .catch(error => {
      console.error(error);
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`/api/todos/${id}`)
    .then(() => {
      setTodos(todos.filter(todo => todo._id !== id));
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Complete" checked={complete} onChange={(e) => setComplete(e.target.checked)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>User ID</Form.Label>
          <Form.Control type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={createTodo}>
          Create
        </Button>
      </Form>
      {todos.map(todo => (
        <Card key={todo._id} style={{ marginTop: '10px' }}>
          <Card.Body>
            <Form>
              <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" defaultValue={todo.content} onChange={(e) => setContent(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" defaultValue={todo.category} onChange={(e) => setCategory(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Complete" defaultChecked={todo.complete} onChange={(e) => setComplete(e.target.checked)} />
              </Form.Group>
            </Form>
            <Button variant="success" onClick={() => updateTodo(todo._id)} style={{ marginRight: '10px' }}>
              Update
            </Button>
            <Button variant="danger" onClick={() => deleteTodo(todo._id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
