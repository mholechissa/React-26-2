import TodoListItem from "./TodoListItem";
function TodoList( {AtodoList}) {

    return(
        <ul>
       {todoList .map (S(todo) => (
        <TodoListItem key={todo.id} todo={todo} />
       ))}
       </ul>
    );
}
 export default TodoList; 