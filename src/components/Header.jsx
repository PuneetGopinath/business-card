import c from '../Constants';

export default function Header({ profile, name, title, tagline, linkedin, email }) {
    return (
        <header className="header">
            <img src={profile} alt="Profile" className="profile" />
            <div className="details">
                <span className="name">{name}</span>
                <span className="title">{title}</span>
                <span className="tagline">{tagline}</span>
            </div>
            <div className="buttons" >
                <a href={linkedin}><span className="button"><img src={c.icons.linkedin} />LinkedIn</span></a>
                <a href={email}><span className="button"><img src={c.icons.email} />Email</span></a>
            </div>
        </header>
    )
}