import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header.jsx";
import Home from "./homePage/Home.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
    return (
        <main className="font-roboto">
            <BrowserRouter>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
