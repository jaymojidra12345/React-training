import {useEffect, useState} from 'react'

const UseEffectPractise = () => {

    const [widthCount,setWidthCount]= useState(window.screen.width)

    const currentScreenWidth = () => {
        setWidthCount(window.screen.width)
    }

    useEffect(() => {
        window.addEventListener('resize',currentScreenWidth)
        return() => {
            window.removeEventListener('resize',currentScreenWidth)
        }
    })

    return (
    <div>
        <h1>The width of the screen is {widthCount}</h1>
    </div>
    )
}

export default UseEffectPractise
