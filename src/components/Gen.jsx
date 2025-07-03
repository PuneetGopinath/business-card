import { useEffect } from "react";

import "../gen.css";

export default function Gen() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/gen.css";

        document.head.appendChild(link);
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        for (const key in data) {
            localStorage.setItem(`cardGen.${key}`, data[key]);
        }
    };

    return (
        <main>
            <h1>Business Card Generator</h1>
            <form className="gen-form" onSubmit={handleSubmit}>
                <label>Enter your name:</label>
                <input type="text" name="name" placeholder="Your Name" required />

                <label>Enter your title:</label>
                <input type="text" name="title" placeholder="Your Title" required />
                
                <label>Enter your tagline:</label>
                <input type="text" name="tagline" placeholder="Your Tagline" required />

                <lable>Enter your content for the 'About' section:</lable>
                <textarea name="about" placeholder="About You" required />

                <label>Enter your interests:</label>
                <input type="text" name="interests" placeholder="Your Interests" required />

                <button type="submit">Generate Card</button>
            </form>
        </main>
    );
};