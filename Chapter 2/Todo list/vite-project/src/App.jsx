import { useState } from 'react'
import './App.css'

function App() {
  const [task , setTask]=useState("")
  const [tasks , setTasks]=useState([])

  const addTask = () => {
    setTasks([...tasks , task])
    setTask("");
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  return (
    <>
      <h1>
        Todo list
      </h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

<button onClick={addTask}>Add</button>
<h2>Tasks: {tasks.length}</h2>

<ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => deleteTask (index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

