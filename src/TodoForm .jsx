
function TodoForm() {
    return(
        <form>
            <label htmlFor="todo">New todo</label> 
            <input id="todo" type="text"/>
            <button type="submit">Add Todo</button>
        </form>
    )
}

 export default TodoForm;