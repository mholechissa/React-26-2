import { useRef } from "react";

function TodoForm({ onAddTodo }) {
  const inputRef = useRef();

  const handleTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.todoTitle.value.trim();

    if (todoTitle) {
      onAddTodo(todoTitle);
      event.target.reset();
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleTodo}>
      <label htmlFor="todoTitle">Add Todo:</label>

      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        placeholder="Todo text"
        required
      />

      <button type="submit">Add New Todo</button>
    </form>
  );
}

export default TodoForm;