import { useState } from "react";
import TextInputWithLabel from "../../../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../../../utils/todoValidation";

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  function handleDoneClick() {
    onCompleteTodo(todo.id);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
    setWorkingTitle(todo.title);
  }

  function handleUpdate(event) {
    event.preventDefault();

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
            elementId={`update-todo-${todo.id}`}
            label="Edit Todo"
            value={workingTitle}
            onChange={(event) => setWorkingTitle(event.target.value)}
          />

          <button type="submit">Save</button>

          <button type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span>{todo.title}</span>

          <button onClick={handleEditClick}>
            Edit
          </button>

          <button onClick={handleDoneClick}>
            Complete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoListItem;