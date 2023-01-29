import Home from "./pages/Home";
import Product from "./pages/Product";
import Store from "./pages/Store";
import About from "./pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
