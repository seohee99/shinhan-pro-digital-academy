import logo from './logo.svg';
import './App.css';
import TodoApp from './components/ToDoApp';
import ToDoPost from './components/ToDoPost';


function App() {
  return (
    <div className="App">
      {/* <TodoApp></TodoApp> */}

      <ToDoPost></ToDoPost>
    </div>
  );
}

export default App;
