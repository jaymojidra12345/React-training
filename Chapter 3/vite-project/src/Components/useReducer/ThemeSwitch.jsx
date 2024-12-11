import {useReducer} from 'react'

const reducer=(state,action)=>{
     switch (action.type) {
        case 'TOGGLE_THEME':
            return { theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            throw new Error('Unknown action type');
    }
}

const ThemeSwitch = () => {

    const initialValue={
        theme:"light"
    }

    const [state,dispatch] = useReducer(reducer,initialValue)


  return (
          <div style={{ background: state.theme === 'light' ? '#fff' : '#333', color: state.theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <h2>Current Theme: {state.theme}</h2>

            <button onClick={()=>{dispatch({type:"TOGGLE_THEME"})}}>Toggle Theme</button>
            </div>
  )}


export default ThemeSwitch
