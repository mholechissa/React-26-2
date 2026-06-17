import { useState } from "react";
import { useSearchParams } from "react-router";
import TodoForm from "../features/TodoForm.jsx";
import TodoList from "../features/TodoList/TodoList.jsx";
import StatusFilter from "../shared/StatusFilter.jsx";

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [searchParams] = useSearchParams();

  const statusFilter = searchParams.get("status") || "all";

  function addTodo(newTodoTitle) {
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  }

  function completeTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }

  function updateTodo(updatedTodo) {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  }

  return (
    <div>
      <StatusFilter />

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
        statusFilter={statusFilter}
      />
    </div>
  );
}

export default TodosPage;