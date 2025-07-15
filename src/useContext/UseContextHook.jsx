import React, {useContext} from "react";

import {ThemeContext} from "./ThemeContext";

const UseContextHook = () => {
    // 3. Use the Context
    // consume the theme context.
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{background: theme}}>
            <h2>useContext Hook</h2>
            <p>{theme}</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};

export default UseContextHook;
