import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Clothes from "./pages/Clothes";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import Shoes from "./pages/Shoes";
import Others from "./pages/Others";
import CartPage from "./pages/CartPage";
import AppState from "./context/appContext/AppState";

function App() {
    return (
        <div className="font-HeroDescription">
            <AppState>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<NavBar />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/clothes" element={<Clothes />} />
                            <Route
                                path="/electronics"
                                element={<Electronics />}
                            />
                            <Route path="/furniture" element={<Furniture />} />
                            <Route path="/shoes" element={<Shoes />} />
                            <Route path="/others" element={<Others />} />
                            <Route path="/cartpage" element={<CartPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppState>
        </div>
    );
}

export default App;
