import { BrowserRouter, Routes, Route } from "react-router-dom";

/*import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";*/
import Card from "./components/Card";
import Gen from "./components/Gen";

import c from "./Constants";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Card {...c} />} />
                <Route path="/generate" element={<Gen />} />
                <Route path="/card" element={<Card useLocalStorage={true} />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}
