import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppState from "./context/appContext/AppState";
import NavBar from "./components/NavBar/NavBar";
import Electronics from "./pages/Electronics";
import Furniture from "./pages/Furniture";
import NotFound from "./pages/NotFound";
import CartPage from "./pages/CartPage";
import Clothes from "./pages/Clothes";
import Others from "./pages/Others";
import Shoes from "./pages/Shoes";
import Home from "./pages/Home";

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
                            <Route path="/*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </AppState>
        </div>
    );
}

export default App;
