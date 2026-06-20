import { useState, useRef, useEffect } from "react";
import DOMPurify from "dompurify";
import TextInputWithLabel from "../shared/TextInputWithLabel";
import { isValidTodoTitle } from "../utils/todoValidation";

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const todoTitleInput = useRef(null);

  useEffect(() => {
    todoTitleInput.current.focus();
  }, []);

  function handleAddTodo(event) {
    event.preventDefault();

    const trimmedTitle = workingTodoTitle.trim();

    if (!isValidTodoTitle(trimmedTitle)) {
      setErrorMessage("Please enter a todo between 1 and 100 characters.");
      return;
    }

    const sanitizedTitle = DOMPurify.sanitize(trimmedTitle, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });

    if (!sanitizedTitle) {
      setErrorMessage("Todo cannot contain unsafe content.");
      return;
    }

    onAddTodo(sanitizedTitle);
    setWorkingTodoTitle("");
    setErrorMessage("");
    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        labelText="Todo"
        value={workingTodoTitle}
        onChange={(event) => {
          setWorkingTodoTitle(event.target.value);
          setErrorMessage("");
        }}
        ref={todoTitleInput}
        maxLength={100}
        required
      />

      <p>{workingTodoTitle.length}/100 characters</p>

      {errorMessage && <p className="error-state">{errorMessage}</p>}

      <button type="submit" disabled={!isValidTodoTitle(workingTodoTitle)}>
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;