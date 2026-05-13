import { useState } from "react";
import TodoForm from "./features/TodoForm";
import TodoList from "./features/TodoList/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        title: newTodo,
      },
    ]);
  };

  return (
    <>
      <h1>My Todos List</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} />
    </>
  );
}

export default App;