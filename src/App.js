import React from "react";
import Header from "./components/HeaderSection/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Expereince from "./components/Expereince/Expereince";
import Work from "./components/Work/Work";
import Services from "./components/Services/Services";
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expereince" element={<Expereince />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />

        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
