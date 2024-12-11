import {useEffect,useRef} from 'react'

const AutoFocus = () => {

    const inputRef=useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div>
        <h2>The input field is in the auto-focus mode</h2>
      <input type='text' ref={inputRef} placeholder='Enter your text here'/><br/>
    </div>
  )
}

export default AutoFocus
