import React from "react";
import "./About.css";
import Tools from "../ToolsAndTechnologies/Tools";

const About = () => {
  return (
    <div>
      <div className="container2 AboutSection">
        <h1 className="contentHeading">
          <span>01. </span>About Me <span className="spanLine"></span>
        </h1>

        <div className="contentAboutSection">
          <div className="leftSide">
            <p className="ABOUTTEXT">
              👋 Hi, I'm Umar Jamil, a passionate{" "}
              <span>
                Full Stack Developer specializing in front-end excellence with
                React
              </span>
              . Proficient in HTML, CSS, Tailwind, Bootstrap, and ReactJS, I
              craft engaging and conversion-focused web experiences. My
              expertise lies in creating responsive and scalable applications
              using the <span>MERN stack</span>. Committed to staying ahead in
              technology, I bring a growth-driven mindset to projects,
              delivering top-tier results through modern methodologies. Open to
              collaboration, I'm eager to connect with developers and industry
              professionals to create exceptional digital experiences together!
              🚀
            </p>
          </div>
          <div className="rightSide">
            <div className="imageSection">
              <img className="AboutImage" src="AboutSectionImage.png" alt="" />
              <div class="overlay"></div>
            </div>
            <div className="borderBox"></div>
          </div>
        </div>
        <Tools />
      </div>
    </div>
  );
};

export default About;
