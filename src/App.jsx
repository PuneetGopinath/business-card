import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Gen from "./components/Gen";

export default function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/generate" element={<Gen />} />
                <Route path="/card" element={<Card export={true} />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
