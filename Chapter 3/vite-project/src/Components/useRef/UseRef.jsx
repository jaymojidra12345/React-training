import {useRef} from 'react'

const UseRef = () => {

    const inputRef=useRef()

    const focusInput=()=>{
        inputRef.current.focus();
    }

  return (
    <div>
      <input type='text' ref={inputRef} placeholder='Enter your text here'/><br/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRef
