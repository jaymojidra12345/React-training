import { useRef, useState } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)
    const timerRef = useRef(null)

    const start = () => {
        if (!timerRef.current) {
            timerRef.current = setInterval(() => {
                setCount(count => count + 1)
            }, 1000)
        }
    }

    const stop = () => {
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    const reset = () => {
        stop()
        setCount(0)
    }

    return (
        <div>
            <h2>Timer : {count}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Timer
