import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App(){
  const [todoList, setTodoList] = useState([]);

const addTodo = (todoTitle) => {
  const newTodo = {
    id: Date.now(),
    title:todoTitle,
  };
  setTodoList((prev) =>[...prev,newTodo]);
};
  return (
    <div>
      <h1>My Todos List</h1>
      <TodoForm  onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
