import './style.css'
import { useState } from 'react'
function App() {
const [newItem, setNewItem] = useState("")
const [todo, setTodo] = useState([]);
function handleSubmit(e) {
  e.preventDefault()
  if (newItem !== ""){
  setTodo((currenttodo) => { return [...currenttodo,
     { id: crypto.randomUUID(),
       title: newItem, completed: false}]  })
      } 
      else {
        alert("Please enter a task")
      }
      console.log(todo) }
  
  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h1>To do List</h1>
      <input type="text" placeholder="Add a task" value = {newItem} onChange={event => {setNewItem(event.target.value)}} />
      <button type="submit">Add</button>
    </form>
    <h1 className='task-title'>Tasks</h1>
    <ul className="task-list">
      {todo.map(item => { return(
          <li key = {item.id}>
          <input type="checkbox" />
          <span>{item.title}</span>
          <button onClick={e => {
            setTodo(todo.filter(i => i.id !== item.id))
          }}>Delete</button>
        </li>

      )})}
    
     

   
    </ul>
    
    </>
  )
}

export default App
