import { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../../utils/todoValidation";

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  function handleCancel() {
    setIsEditing(false);
    setWorkingTitle(todo.title);
  }

  function handleUpdate(event) {
    event.preventDefault();

    if (!isEditing) return;

    if (!isValidTodoTitle(workingTitle)) {
      return;
    }

    onUpdateTodo({
      ...todo,
      title: workingTitle,
    });

    setIsEditing(false);
  }

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <TextInputWithLabel
            elementId={`edit-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={(event) =>
              setWorkingTitle(event.target.value)
            }
          />

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

          <span onClick={() => setIsEditing(true)}>
            {todo.title}
          </span>
        </label>
      )}
    </li>
  );
}

export default TodoListItem;