import { useState } from "react";
import TodoForm from "./features/TodoForm";
import TodoList from "./features/TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodoTitle) {
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  }

  function completeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function updateTodo(updatedTodo) {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id
          ? updatedTodo
          : todo
      )
    );
  }

  return (
    <div>
      <h1>Todo List</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default App;