import c from '../Constants';

export default function Header() {
    return (
        <header className="header">
            <img src={c.profile} alt="Profile" className="profile" />
            <div className="details">
                <span className="name">{c.name}</span>
                <span className="title">{c.title}</span>
            </div>
            <div className="buttons" >
                <a href={c.social.linkedin}><span className="button"><img src={c.icons.linkedin} />LinkedIn</span></a>
                <a href={c.social.email}><span className="button"><img src={c.icons.email} />Email</span></a>
            </div>
        </header>
    )
}