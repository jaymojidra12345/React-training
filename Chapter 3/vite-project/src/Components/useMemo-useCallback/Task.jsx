import { useMemo,useCallback, useState } from "react";

const Task = () => {

    const [numbers,setNumbers]=useState([1,2,3,4,5])
    const [input,setInput]=useState('')

    const sumOfSquares=useMemo(()=>{
        return numbers.reduce((sum,num)=>sum+num**2,0)
    },[numbers])
   
    const addNumbers=useCallback(()=>{
        setNumbers([...numbers,input])
        setInput('')
    },[numbers,input])

  return (
    <div>
      <h3>Numbers : {numbers.join(', ')}</h3>
      <h3>Sums of Squares : {sumOfSquares}</h3>

      <input type='number' value={input} onChange={(e)=>setInput(e.target.value)}/><br/><br/>
      <button onClick={addNumbers}>Add Number</button>
    </div>
  )
}

export default Task
