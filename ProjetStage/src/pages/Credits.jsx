import "../styles/Credits.css";

function Credits() {
    return (
        <div className="credits-page">
            <img src="/react.svg" alt="Logo React" className="rotating-icon"/>
            <div className="text-overlay">
                <h1>Crédits</h1>
                <p>
                    Développeur : Clément DE WASCH
                </p>
                <p>
                    Bibliothèques utilisées : React, Vite
                </p>
            </div>
            <div className="text-overlay">
                <p>Site réalisé en tant qu'exercice de développement en ReactJS / HTML / CSS, <br></br>
                    avec l'aide de la doc officielle de ReactJS ainsi que UIVerse.io pour le switch</p>
            </div>
            <img src="/vite.svg" className="vite-icon"></img>
        </div>
    );
}

export default Credits;