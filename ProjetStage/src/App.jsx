import { useState } from "react";
import "./App.css";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={isDarkTheme ? "app dark" : "app light"}>
            <h1>{isDarkTheme ? "Mode Sombre" : "Mode Clair"}</h1>
            <div className="toggle-switch">
                <label className="switch-label">
                    <input type="checkbox" className="checkbox" onClick={toggleTheme}/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    );
}

export default App;