import TodoListItem from "./TodoListItem";

function TodoList({
  todos,
  onCompleteTodo,
  onUpdateTodo,
  statusFilter = "all",
}) {
  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "completed") {
      return todo.isCompleted;
    }

    if (statusFilter === "active") {
      return !todo.isCompleted;
    }

    return true;
  });

  function getEmptyMessage(statusFilter) {
    if (statusFilter === "active") {
      return "No active todos found.";
    }

    if (statusFilter === "completed") {
      return "No completed todos found.";
    }

    return "No todos found.";
  }

  if (filteredTodos.length === 0) {
    return <p>{getEmptyMessage(statusFilter)}</p>;
  }

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
          onUpdateTodo={onUpdateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;