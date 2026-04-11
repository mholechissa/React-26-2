
function TodoForm() {
    return(
        <form>
            <label htmlFor="todo">New todo</label> 
            <input id="todo" type="text"/>
            <button type="submit">add Todo</button>
        </form>
    )
}

 export default TodoForm;