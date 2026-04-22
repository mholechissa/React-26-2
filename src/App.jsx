import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todos = [ 
  {id: 1, title: 'Learn React'},
  {id: 2, title: 'Finish homework'},
  {id: 3, title: 'Practice coding'}
];
function App() {   
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>My Todos List</h1>
<TodoForm />
 <TodoList todoList={todoList} />
    </div>
  )
// resubmission fix 2
};

export default App;
