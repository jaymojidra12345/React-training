import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> The Counter value is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click to increase the count</button>
      <button onClick={() => setCount(count - 1)}>Click to decrease the count</button>
      <br/>
      <button onClick={()=> setCount(0)}>Click to reset the count</button>
    </>
  )
}

export default App
