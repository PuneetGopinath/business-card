import { Link } from "react-router-dom";

import Card from "./Card";

export default function Home() {
    return (
        <main className="home">
            <div className="intro">
                <h1>Business Card Generator</h1>
                <p>Create personalized digital business cards in seconds. Export as JPG, PNG, or interactive HTML. All in your browser, no signup required.</p>
                <Link to="/generate" className="cta">Start Creating</Link>
            </div>
            <div className="preview">
                <Card export={false} />
            </div>
        </main>
    )
};