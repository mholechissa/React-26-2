import { useMemo } from "react";
import TodoListItem from "./TodoListItem";

function TodoList({
  todos,
  onCompleteTodo,
  onUpdateTodo,
  dataVersion,
}) {
  const filteredTodoList = useMemo(() => {
    return {
      version: dataVersion,
      todos: todos.filter((todo) => !todo.isCompleted), 
    };
  }, [todos, dataVersion]);

  return (
    <>
      {filteredTodoList.todos.length === 0 ? (
        <p>Add todo above to get started</p>
      ) : (
        <ul>
          {filteredTodoList.todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;