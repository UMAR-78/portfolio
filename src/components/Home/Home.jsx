import React from "react";
import Header from "../HeaderSection/Header";
import HeroSection from "../HeroSection/HeroSection";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Work from "../Work/Work";
import Expereince from "../Expereince/Expereince";
import Services from "../Services/Services";

const Home = () => {

  const pageStyle = {
    backgroundColor: "#0a192f", // Set your desired background color
    // Add any other styles you may need for the entire page
  };

  return (
    <div style={pageStyle}>
      <HeroSection />
      {/* <About /> */}
      {/* <Expereince />
      <Work />
      <Services />
      <Footer /> */}
    </div>
  );
};

export default Home;
