import React, {createContext, useState} from "react";

// 1. Create the Context
export const ThemeContext = createContext("white"); //Default Theme

// 2. Provide the Context
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("white");

    const toggleTheme = () => {
        setTheme(prev => (prev == "white" ? "gray" : "white"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
