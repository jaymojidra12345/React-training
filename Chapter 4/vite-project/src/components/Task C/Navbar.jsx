import { useContext } from 'react';
import { ThemeContext } from '../Task B/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navStyle = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const navItemStyle = {
        margin: '0 10px',
        cursor: 'pointer',
    };


    return (
        <nav style={navStyle}>
            <div>
                <span style={navItemStyle}>Home</span>
                <span style={navItemStyle}>About</span>
                <span style={navItemStyle}>Services</span>
                <span style={navItemStyle}>Contact</span>
                <span style={navItemStyle}>Login</span>

            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    )
}

export default Navbar