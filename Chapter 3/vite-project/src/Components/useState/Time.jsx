import React from 'react'
import { useState } from 'react'

const Time = () => {

    var newTime=new Date().toLocaleTimeString();
    const[time, setTime]= useState(newTime);

    const refreshTime = () => {
        newTime=new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return (
    <div>
      <h1>Time is {newTime}</h1>
      <button onClick={refreshTime}>Click here to refresh</button>
    </div>
    )
}

export default Time
