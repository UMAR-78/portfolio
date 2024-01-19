import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="container HeroSection">
      <h4 className="firstText">Hi, my name is</h4>
      <h1 className="secondText">Umar Jamil</h1>
      <h1 className="thirdText">I build things for the web.</h1>
      <p className="text">
        A dedicated software engineer with a primary focus on web development,
        particularly <br /> in the frontend. I excel in crafting engaging and{" "}
        <span>user-friendly web interfaces</span>, using
        <br /> my skills to enhance the online experience through intuitive
        design and cutting-edge
        <br /> technologies. Let's bring your web projects to life with
        creativity and precision.
      </p>

      <Link to={"/contact"}>
        <button type="button" className="button">
          Lets Discuss
        </button>
      </Link>
    </div>
  );
};

export default HeroSection;
