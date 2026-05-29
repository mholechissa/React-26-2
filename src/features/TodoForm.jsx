import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!todoTitle.trim()) return;

    onAddTodo(todoTitle.trim());
    setTodoTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">Add Todo:</label>

      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        onChange={(event) => setTodoTitle(event.target.value)}
        placeholder="Todo text"
      />

      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;