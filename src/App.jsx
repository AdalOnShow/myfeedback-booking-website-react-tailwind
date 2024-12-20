import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import RestaurantsPage from "./restaurantsPage/RestaurantsPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <main className="font-roboto">
            <BrowserRouter>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<RestaurantsPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </main>
    )
}

export default App
