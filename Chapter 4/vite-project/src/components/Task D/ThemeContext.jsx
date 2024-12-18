import { createContext } from "react";
import { useState } from "react";
export const ThemeContext = createContext();

const themes = {
    light: {
        background: 'white',
        color: 'black'
    },
    dark: {
        background: 'black',
        color: 'white'
    },
    blue: {
        background: "blue",
        color: 'white'
    },
    red: {
        background: "red",
        color: 'white'
    }
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, themes,toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider