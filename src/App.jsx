import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route path="/shopapp" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </div>
  );
};

export default App;
