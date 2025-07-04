import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h2 className="logo">Business Card Generator ✨</h2>
            <nav>
                <Link to="/generate" className="nav-link">Generate Your Card</Link>
            </nav>
        </header>
    )
}