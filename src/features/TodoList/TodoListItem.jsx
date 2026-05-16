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

  function handleUpdate() {
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
        <>
          <TextInputWithLabel
            elementId={`edit-${todo.id}`}
            labelText="Edit Todo"
            value={workingTitle}
            onChange={(event) => setWorkingTitle(event.target.value)}
          />

          <button
            type="button"
            onClick={handleUpdate}
            disabled={!isValidTodoTitle(workingTitle)}
          >
            Update
          </button>

          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <label htmlFor={`complete-${todo.id}`}>
          <input
            type="checkbox"
            id={`complete-${todo.id}`}
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