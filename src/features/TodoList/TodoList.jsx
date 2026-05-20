import TodoListItem from "./TodoListItem";

function TodoList({
  todos,
  onCompleteTodo,
  onUpdateTodo,
}) {
  return (
    <ul>
      {todos.map((todo) => (
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