import c from '../Constants';

export default function Main() {
    return (
        <main>
            <p className="subtitle">About</p>
            <p className="text">{c.about}</p>
            <p className="subtitle">Interests</p>
            <p className="text">{c.interests}</p>
        </main>
    )
}