import React from "react";
import Header from "../HeaderSection/Header";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Work from "../Work/Work";
import Expereince from "../Expereince/Expereince";
const Home = () => {
  return (
    <div>
        <HeroSection/>
        <About/>
        <Expereince/>
        <Work/>
    </div>
  );
};

export default Home;
