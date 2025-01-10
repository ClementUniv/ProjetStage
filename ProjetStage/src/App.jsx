import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home.jsx";
import Credits from "./pages/Credits.jsx";

function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <Router>
            {/* Theme */}
            <div className={isDarkTheme ? "app dark" : "app light"}>
                {/* Barre de navigation */}
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Présentation</Link>
                        </li>
                        <li>
                            <Link to="/credits">Crédits</Link>
                        </li>
                    </ul>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleTheme}/>
                        <span className="slider"></span>
                    </label>
                </nav>

                {/* Contenu des pages */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/credits" element={<Credits />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;