function TodoForm() {
    return(
        <form>
            <label htmlFor="todoTitle">Add Todo</label>
            <input id="todoTitle" type="text" />
            <button type="submit">Add</button>
        </form>
    );
}
export default TodoForm;