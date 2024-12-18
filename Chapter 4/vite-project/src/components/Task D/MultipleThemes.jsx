import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MultipleThemes = () => {
    const {theme, themes, toggleTheme} = useContext(ThemeContext)

    const navStyle = {
        backgroundColor: themes[theme].background,
        color: themes[theme].color,
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    const navItemStyle = {
        margin: '0 10px',
        cursor: 'pointer',
    }

    return (
        <nav style={navStyle}>
            <div>
                <span style={navItemStyle}>Home</span>
                <span style={navItemStyle}>About</span>
                <span style={navItemStyle}>Services</span>
                <span style={navItemStyle}>Contact</span>
            </div>

            <select
                onChange={(e) => toggleTheme(e.target.value)}
                value={theme}
                style={{
                    padding: '10px',
                    backgroundColor: themes[theme].color,
                    color: themes[theme].background,
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="blue">Blue</option>
                <option value="red">Red</option>

            </select>
        </nav>
    )
}

export default MultipleThemes