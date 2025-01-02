import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./Products";
import Footer from "./components/Footer";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

const App = () => {
  return (
    <main>
      <Navbar currentColor="#111827" />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
