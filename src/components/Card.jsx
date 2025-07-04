import { useState } from "react";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";

import styles from "../index.css?raw";

import c from "../Constants";

import X from "../images/x.svg?react";
import Facebook from "../images/facebook.svg?react";
import Instagram from "../images/instagram.svg?react";
import Github from "../images/github.svg?react";
import Gmail from "../images/gmail.svg?react";
import LinkedIn from "../images/linkedin.svg?react";

export default function Card(props) {
    let data;
    if (props.export) {
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
    } else
        data = { ...c };

    const [ exportType, setExportType ] = useState("pdf");

    const handleExport = () => {
        const svgElements = document.querySelectorAll("svg");
        svgElements.forEach(item => {
            item.setAttribute("width", item.getBoundingClientRect().width);
            item.setAttribute("height", item.getBoundingClientRect().height);
            item.style.width = null;
            item.style.height= null;
        });
        switch (exportType) {
            case "pdf": {
                const el = document.querySelector(".card");
                const options = {
                    margin: 0.5,
                    filename: `${data.name.split(" ").join("-").toLowerCase()}-business-card.pdf`,
                    image: { type: "jpeg", quality: 0.98 },
                    html2canvas: { useCORS: true, allowTaint: false, scale: 2 },
                    jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
                };

                html2pdf().set(options).from(el).save();
                break;
            }
            case "png":
            case "jpeg": {
                const el = document.querySelector(".card");
                html2canvas(el, {
                    useCORS: true,
                    allowTaint: false,
                    scale: 2
                }).then((canvas) => {
                    const link = document.createElement("a");
                    link.download = `${data.name.split(" ").join("-").toLowerCase()}-business-card.${exportType}`;
                    link.href = canvas.toDataURL(`image/${exportType}`);
                    link.click();
                });
                break;
            }
            case "html": {
                const el = document.querySelector(".card");
                const htmlContent = `<style>${styles}</style>${el.outerHTML}`;

                const blob = new Blob([htmlContent], { type: "text/html" });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `${data.name.split(" ").join("-").toLowerCase()}-business-card.html`;
                link.click();
            }
        }
    };

    return (
        <main className="card-container">
            <div className="card">
                <section className="top">
                    <img
                        src={data.profile}
                        alt="Profile"
                        className="profile"
                    />
                    <div className="details">
                        <span className="name">{data.name}</span>
                        <span className="title">{data.title}</span>
                        <span className="tagline">{data.tagline}</span>
                    </div>
                    <div className="buttons" >
                        <a href={data.linkedin}><span className="button"><LinkedIn />LinkedIn</span></a>
                        <a href={`mailto:${data.email}`}><span className="button"><Gmail />Email</span></a>
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
                        <a href={data.social.x}><span className="button"><X className="icon" /></span></a>
                        <a href={data.social.facebook}><span className="button"><Facebook className="icon" /></span></a>
                        <a href={data.social.instagram}><span className="button"><Instagram className="icon" /></span></a>
                        <a href={data.social.github}><span className="button"><Github className="icon" /></span></a>
                    </div>
                </section>
            </div>

            {props.export ? <div className="export-info">
                <h1>Export your Business Card</h1>
                <p>
                    You're all set—your card is now previewed with your personalized details, profile image, and social links.
                    <br />
                    Choose your preferred format and click export to save or share your card. Whether it's a static image for quick sharing or a PDF with clickable links, it's ready to go wherever you want to take it.
                </p>

                {["jpeg", "png"].includes(exportType) ? <><small>Note: ⚠️ Image downloads (PNG/JPG) are static—links won't be clickable. For interactive cards, try exporting as PDF or HTML.</small></> : null}
                <select name="exportType" className="type" value={exportType} onChange={(e) => setExportType(e.target.value)}>
                    <option value="pdf">PDF — Best for printing + clickable links</option>
                    <option value="png">PNG — Static image</option>
                    <option value="jpeg">JPG/JPEG — Static image</option>
                    <option value="html">HTML — Interactive format</option>
                </select>
                <button
                    className="export"
                    onClick={handleExport}
                >
                    Export
                </button>
            </div> : null}
        </main>
    );
};