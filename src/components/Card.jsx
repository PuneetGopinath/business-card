import c from '../Constants';

export default function Card(props) {
    return (
        <main className="card">
            <section className="top">
                <img src={props.profile} alt="Profile" className="profile" />
                <div className="details">
                    <span className="name">{props.name}</span>
                    <span className="title">{props.title}</span>
                    <span className="tagline">{props.tagline}</span>
                </div>
                <div className="buttons" >
                    <a href={props.linkedin}><span className="button"><img src={c.icons.linkedin} />LinkedIn</span></a>
                    <a href={props.email}><span className="button"><img src={c.icons.email} />Email</span></a>
                </div>
            </section>
            <section className="main">
                <p className="subtitle">About</p>
                <p className="text">{props.about}</p>
                <p className="subtitle">Interests</p>
                <p className="text">{props.interests}</p>
            </section>
            <section className="bottom">
                <div className="buttons" >
                    <a href={c.social.x}><span className="button"><img src={c.icons.x} /></span></a>
                    <a href={c.social.facebook}><span className="button"><img src={c.icons.facebook} /></span></a>
                    <a href={c.social.instagram}><span className="button"><img src={c.icons.instagram} /></span></a>
                    <a href={c.social.github}><span className="button"><img src={c.icons.github} /></span></a>
                </div>
            </section>
        </main>
    );
};