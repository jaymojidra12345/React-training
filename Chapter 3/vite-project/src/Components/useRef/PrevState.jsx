import { useState, useEffect, useRef } from 'react'

const PrevState = () => {

    const [inpValue, setInpValue] = useState('')
    const prevValue = useRef('')

    useEffect(() => {
        prevValue.current = inpValue
    }, [inpValue])

    return (
        <div>
            <h2>Example on the Previous state with the useRef</h2>
            <input type='text' value={inpValue} onChange={(e) => { setInpValue(e.target.value) }} placeholder='Enter your text here' /><br />

            <h2>Current Value: {inpValue}</h2>
            <h2>Previous Value: {prevValue.current}</h2>
        </div>
    )
}

export default PrevState
