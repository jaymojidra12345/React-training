import { useContext } from 'react'
import {myContext} from '../../App'

const UseContextPractice = () => {

const data=useContext(myContext);
    return (
    <div><h1>
        {data}
        </h1>
    </div>
    )
}

export default UseContextPractice
