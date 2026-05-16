import { useState } from "react";
import TextInputWithLabel from "../../shared/TextInputWithLabel";

function TodoListItem({
  todo,
  onCompleteTodo,
  onUpdateTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  function handleCancel() {
    setIsEditing(false);
    setWorkingTitle(todo.title);
  }

  function handleUpdate(event) {
    event.preventDefault();

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
      label="Edit Todo"
      value={workingTitle}
      onChange={(event) => setWorkingTitle(event.target.value)}
    />

    <button type="submit">
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
        <>
          <span>{todo.title}</span>

          <button type="button" onClick={() => onCompleteTodo(todo.id)}>
            Complete
          </button>

          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </li>
  );
}

export default TodoListItem;