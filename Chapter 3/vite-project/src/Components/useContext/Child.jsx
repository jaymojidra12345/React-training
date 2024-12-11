import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../App'
const Child = () => {

    const recieveData=useContext(myContext);

    return (
    <div>
        <h1>
            name  : {recieveData.name}<br/>
            age  :{recieveData.age}
        
        </h1>
    </div>
    )
}

export default Child
