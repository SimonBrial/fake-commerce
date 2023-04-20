import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Clothes from "./routes/Clothes";
import Electronics from "./routes/Electronics";
import Furniture from "./routes/Furniture";
import Shoes from "./routes/Shoes";
import Others from "./routes/Others";

function App() {
    return (
        <div className="font-HeroDescription">
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Hero />}/>
                    <Route path="/clothes" element={<Clothes />} />
                    <Route path="/Electronics" element={<Electronics />} />
                    <Route path="/Furniture" element={<Furniture />} />
                    <Route path="/Shoes" element={<Shoes />} />
                    <Route path="/Others" element={<Others />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
