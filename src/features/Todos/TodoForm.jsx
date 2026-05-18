import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

    if (!workingTodoTitle.trim()) return;

    onAddTodo(workingTodoTitle);

    setWorkingTodoTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Add Todo:</label>

      <input
        type="text"
        id="todoTitle"
        placeholder="Todo text"
        value={workingTodoTitle}
        onChange={(event) =>
          setWorkingTodoTitle(event.target.value)
        }
      />

      <button
        type="submit"
        disabled={!workingTodoTitle.trim()}
      >
        Add New Todo
      </button>
    </form>
  );
}

export default TodoForm;