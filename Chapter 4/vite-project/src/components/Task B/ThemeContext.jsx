import  { createContext, useState } from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light'); 

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const contextValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
