import "./App.css";
import TodoForm from "./TodoForm ";
import TodoList from "./TodoList ";

function App() {
  const todoList =[
    {id: 1, title: 'review resources'},
    {id: 2, title: 'take notes'},
    {id: 3, title:'code out app'},
  ]
return (
<div className="app-container">
  <div className="app-box">
  <h1>My Todos</h1>
  <TodoForm/>
  <TodoList/>
 
</div>
</div>
)
}
export default App;