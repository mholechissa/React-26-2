import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList/TodoList";

function TodosPage({ token }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  useEffect(() => {
    if (!token) return;

    async function fetchTodos() {
      setIsTodoListLoading(true);
      setError("");

      try {
        const response = await fetch("/api/tasks", {
          method: "GET",
          headers: {
            "X-CSRF-TOKEN": token,
          },
          credentials: "include",
        });

        if (response.status === 401) {
          throw new Error("Unauthorized");
        }

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.json();
        setTodoList(data.tasks);
      } catch (error) {
        setError(`Error: ${error.message}`);
      } finally {
        setIsTodoListLoading(false);
      }
    }

    fetchTodos();
  }, [token]);

  async function addTodo(newTodoTitle) {
    const temporaryTodo = {
      id: Date.now(),
      title: newTodoTitle,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };

    setTodoList([...todoList, temporaryTodo]);
    setError("");

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
        body: JSON.stringify({
          title: newTodoTitle,
          isCompleted: false,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const savedTodo = await response.json();

      setTodoList((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === temporaryTodo.id ? savedTodo : todo
        )
      );
    } catch (error) {
      setTodoList((currentTodos) =>
        currentTodos.filter((todo) => todo.id !== temporaryTodo.id)
      );
      setError(`Error: ${error.message}`);
    }
  }

  async function completeTodo(id) {
    const originalTodo = todoList.find((todo) => todo.id === id);

    if (!originalTodo) return;

    const updatedTodo = {
      ...originalTodo,
      isCompleted: true,
    };

    setTodoList(
      todoList.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
    setError("");

    try {
      const response = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
        body: JSON.stringify({
          isCompleted: true,
          createdAt: originalTodo.createdAt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to complete todo");
      }
    } catch (error) {
      setTodoList((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === id ? originalTodo : todo
        )
      );
      setError(`Error: ${error.message}`);
    }
  }

  async function updateTodo(editedTodo) {
    const originalTodo = todoList.find((todo) => todo.id === editedTodo.id);

    if (!originalTodo) return;

    setTodoList(
      todoList.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      )
    );
    setError("");

    try {
      const response = await fetch(`/api/tasks/${editedTodo.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
        credentials: "include",
        body: JSON.stringify({
          title: editedTodo.title,
          isCompleted: editedTodo.isCompleted,
          createdAt: editedTodo.createdAt,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
    } catch (error) {
      setTodoList((currentTodos) =>
        currentTodos.map((todo) =>
          todo.id === editedTodo.id ? originalTodo : todo
        )
      );
      setError(`Error: ${error.message}`);
    }
  }

  return (
    <div>
      {error && (
        <div>
          <p>{error}</p>
          <button type="button" onClick={() => setError("")}>
            Clear Error
          </button>
        </div>
      )}

      {isTodoListLoading && <p>Loading todos...</p>}

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default TodosPage;