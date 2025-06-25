import c from '../Constants';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="buttons" >
                <a href={c.social.x}><span className="button"><img src={c.icons.x} /></span></a>
                <a href={c.social.facebook}><span className="button"><img src={c.icons.facebook} /></span></a>
                <a href={c.social.instagram}><span className="button"><img src={c.icons.instagram} /></span></a>
                <a href={c.social.github}><span className="button"><img src={c.icons.github} /></span></a>
            </div>
        </footer>
    )
}