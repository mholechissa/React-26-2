import { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../../utils/todoValidation";

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);
  const [errorMessage, setErrorMessage] = useState("");

  function handleCancel() {
    setIsEditing(false);
    setWorkingTitle(todo.title);
    setErrorMessage("");
  }

  function handleUpdate(event) {
    event.preventDefault();

    if (!isValidTodoTitle(workingTitle)) {
      setErrorMessage(
        "Todo title must contain between 1 and 100 characters."
      );
      return;
    }

    onUpdateTodo({
      ...todo,
      title: workingTitle.trim(),
    });

    setErrorMessage("");
    setIsEditing(false);
  }

  return (
    <li className="todo-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <TextInputWithLabel
            elementId={`edit-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={(event) => {
              setWorkingTitle(event.target.value);
              setErrorMessage("");
            }}
            maxLength={100}
          />

          {errorMessage && (
            <p className="error-state">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={!isValidTodoTitle(workingTitle)}
          >
            Update
          </button>

          <button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      ) : (
        <label htmlFor={`todo-${todo.id}`}>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.isCompleted}
            onChange={() => onCompleteTodo(todo.id)}
          />

          <span
            role="button"
            tabIndex={0}
            onClick={() => setIsEditing(true)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setIsEditing(true);
              }
            }}
          >
            {todo.title}
          </span>
        </label>
      )}
    </li>
  );
}

export default TodoListItem;