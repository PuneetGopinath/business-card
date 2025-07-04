import { useEffect } from "react";

import "../gen.css";

export default function Gen() {
    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/gen.css";

        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        };
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const maxSize = 500 * 1024; // 500 KB

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        for (const key in data) {
            if (key === "profile") {
                if (data[key].size > maxSize)
                    return alert("Profile image size exceeds 500 KB. Please upload a smaller image.");
                const reader = new FileReader();
                reader.onload = () => {
                    localStorage.setItem(`cardGen.${key}`, reader.result);
                };
                reader.readAsDataURL(data[key]);
                continue;
            }
            localStorage.setItem(`cardGen.${key}`, data[key]);
        }

        if (!data.linkedin)
            localStorage.setItem("cardGen.linkedin", "https://linkedin.com/");
        if (!data.x)
            localStorage.setItem("cardGen.x", "https://x.com/");
        if (!data.facebook)
            localStorage.setItem("cardGen.facebook", "https://facebook.com/");
        if (!data.instagram)
            localStorage.setItem("cardGen.instagram", "https://instagram.com/");
        if (!data.github)
            localStorage.setItem("cardGen.github", "https://github.com");
        window.location.href = "/card";
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

                <label>Upload your profile image:</label>
                <input type="file" name="profile" accept="image/*" required />

                <lable>Enter your content for the 'About' section:</lable>
                <textarea name="about" placeholder="About You" required />

                <label>Enter your interests:</label>
                <input type="text" name="interests" placeholder="Your Interests" required />

                <div className="social-links">
                    <h3>Social Accounts</h3>
                    <label className="social-label">LinkedIn:</label>
                    <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                    <label className="social-label">X:</label>
                    <input type="url" name="x" placeholder="https://x.com/yourprofile" />
                    <label className="social-label">Facebook:</label>
                    <input type="url" name="facebook" placeholder="https://facebook.com/yourprofile" />
                    <label className="social-label">Instagram:</label>
                    <input type="url" name="instagram" placeholder="https://instagram.com/yourprofile" />
                    <label className="social-label">GitHub:</label>
                    <input type="url" name="github" placeholder="https://github.com/yourprofile" />
                </div>

                <label>Enter your email:</label>
                <small>For your client's contact purpose</small>
                <input type="email" name="email" placeholder="Enter your email" required />

                <button type="submit">Generate Card</button>
            </form>
        </main>
    );
};