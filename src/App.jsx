import './App.css'
import TodoForm from './TodoForm '
import TodoList from './TodoList '
function App() {
  const todoList =[
    {id: 1, title: 'review resources'},
    {id: 2, title: 'take notes'},
    {id: 3, title:'code out app'},
  ]
return (
<div>
  <h1>My Todos</h1>
  <TodoForm/>
  <TodoList/>
 
</div>
)
}
export default App