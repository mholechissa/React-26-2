import { useState, useRef, useEffect } from "react";
import DOMPurify from "dompurify";
import TextInputWithLabel from "../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../utils/todoValidation";

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const todoTitleInput = useRef(null);

  useEffect(() => {
    todoTitleInput.current.focus();
  }, []);

  function handleAddTodo(event) {
    event.preventDefault();

    if (!isValidTodoTitle(workingTodoTitle)) {
      return;
    }

    const sanitizedTitle = DOMPurify.sanitize(workingTodoTitle.trim(), {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

    onAddTodo(sanitizedTitle);
    setWorkingTodoTitle("");
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        labelText="Todo"
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        ref={todoTitleInput}
      />

      <button type="submit" disabled={!isValidTodoTitle(workingTodoTitle)}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;