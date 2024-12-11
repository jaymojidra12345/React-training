import { useReducer} from 'react'

const reducer=(state,action)=>{
    switch (action.type) {
        case "INCREMENT":
            return state+1
            break;
    
        case "DECREMENT":
            return state-1
            break;

        case 'RESET':
            return 0;
            break;

        default: return state
            break;
    }
}

const UseReducer = () => {

    const initialState = 0
    const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h2>Count = {state}</h2><br/>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button><br/>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button><br/>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button><br/>
    </div>
  )
}

export default UseReducer
