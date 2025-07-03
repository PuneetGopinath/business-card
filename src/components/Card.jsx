import c from '../Constants';

export default function Card(props) {
    let data = { ...props };
    if (props.useLocalStorage) {
        data = {
            name: localStorage.getItem("cardGen.name") || c.name,
            title: localStorage.getItem("cardGen.title") || c.title,
            tagline: localStorage.getItem("cardGen.tagline") || c.tagline,
            about: localStorage.getItem("cardGen.about") || c.about,
            interests: localStorage.getItem("cardGen.interests") || c.interests,
            profile: localStorage.getItem("cardGen.profile") || c.profile,
            linkedin: localStorage.getItem("cardGen.linkedin") || c.social.linkedin,
            email: localStorage.getItem("cardGen.email") || c.social.email,
            social: {
                x: localStorage.getItem("cardGen.x") || c.social.x,
                facebook: localStorage.getItem("cardGen.facebook") || c.social.facebook,
                instagram: localStorage.getItem("cardGen.instagram") || c.social.instagram,
                github: localStorage.getItem("cardGen.github") || c.social.github
            },
        };
    }

    return (
        <main className="card">
            <section className="top">
                <img src={data.profile} alt="Profile" className="profile" />
                <div className="details">
                    <span className="name">{data.name}</span>
                    <span className="title">{data.title}</span>
                    <span className="tagline">{data.tagline}</span>
                </div>
                <div className="buttons" >
                    <a href={data.linkedin}><span className="button"><img src={c.icons.linkedin} />LinkedIn</span></a>
                    <a href={data.email}><span className="button"><img src={c.icons.email} />Email</span></a>
                </div>
            </section>
            <section className="main">
                <p className="subtitle">About</p>
                <p className="text">{data.about}</p>
                <p className="subtitle">Interests</p>
                <p className="text">{data.interests}</p>
            </section>
            <section className="bottom">
                <div className="buttons" >
                    <a href={data.social.x}><span className="button"><img src={c.icons.x} /></span></a>
                    <a href={data.social.facebook}><span className="button"><img src={c.icons.facebook} /></span></a>
                    <a href={data.social.instagram}><span className="button"><img src={c.icons.instagram} /></span></a>
                    <a href={data.social.github}><span className="button"><img src={c.icons.github} /></span></a>
                </div>
            </section>
        </main>
    );
};