import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  };

  const completeTodo = (id) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === id
        ? { ...todo, isCompleted: true }
        : todo
    );

    setTodoList(updatedTodoList);
  };

  return (
    <main>
      <h1>Todo App</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
      />
    </main>
  );
}

export default App;
