// components/App.jsx
import React, { useContext } from 'react';
import ThemeContextProvider, { ThemeContext } from './ThemeContext';

const AppContent = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            style={{
                backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
                color: theme === 'light' ? '#000000' : '#ffffff',

            }}
        >
            <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
            <button
                onClick={toggleTheme}
                style={{

                    backgroundColor: theme === 'light' ? '#000000' : '#ffffff',
                    color: theme === 'light' ? '#ffffff' : '#000000',

                }}
            >
                Toggle Theme
            </button>
        </div>
    );
};

export default AppContent;

