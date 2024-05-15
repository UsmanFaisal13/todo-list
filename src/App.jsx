import './style.css'
function Add(){
  
}
function App() {


  return (
    <>
    <form className="form">
      <h1>To do List</h1>
      <input type="text" placeholder="Add a task" />
      <button type="submit">Add</button>
    </form>
    <h1 className='task-title'>Tasks</h1>
    <ul className="task-list">
      <li>
        <input type="checkbox" />
        <span>Task 1</span>
        <button>Delete</button>
      </li>
      <li>
        <input type="checkbox" />
        <span>Task 2</span>
        <button>Delete</button>
      </li>
    </ul>
    
    </>
  )
}

export default App
