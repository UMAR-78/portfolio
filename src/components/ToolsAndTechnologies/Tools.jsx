import React from "react";
import "./Tools.css";

const Tools = () => {
  return (
    <div>
      <div className="TextSection">
        <h2 className="FirstHeading">What tools & technologies do I use?</h2>
        <p className="secondHeading">
          Explore the tools and technologies I use, giving you a peek into the
          practical resources that help me excel in my projects.
        </p>
      </div>
      <div className="ToolsDiv">
        <div className="tool">
          <img className="toolsImage" src="Brand=figma, Style=Light.svg" alt="" />
          <h5 className="toolHeading">Figma</h5>
          <p className="toolDescription">
            I design user interfaces collaboratively using Figma, streamlining
            teamwork.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="githubDark.png" alt="" />
          <h5 className="toolHeading">Github</h5>
          <p className="toolDescription">
          I leverage GitHub for efficient version control and collaborative software development.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=html5, Style=Light.svg" alt="" />
          <h5 className="toolHeading">HTML 5</h5>
          <p className="toolDescription">
          I implement HTML5 for structured and enhanced web content presentation.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=tailwind, Style=Light.png" alt="" />
          <h5 className="toolHeading">Tailwind</h5>
          <p className="toolDescription">
          I optimize styling with Tailwind CSS, embracing its utility-first approach to effortlessly create and customize styles in web development.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=redux, Style=Light.png" alt="" />
          <h5 className="toolHeading">Redux Toolkit</h5>
          <p className="toolDescription">
          I implement Redux Toolkit to streamline state management in React applications, ensuring efficiency and maintainability.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=reactjs, Style=Light.svg" alt="" />
          <h5 className="toolHeading">React js</h5>
          <p className="toolDescription">
          I employ ReactJS for dynamic and interactive user interfaces in web applications.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=postman, Style=Light.png" alt="" />
          <h5 className="toolHeading">Postman</h5>
          <p className="toolDescription">
          I depend on Postman for efficient API testing and development, fostering collaboration and ensuring robust testing</p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=nodejs, Style=Light.svg" alt="" />
          <h5 className="toolHeading">Node js</h5>
          <p className="toolDescription">
          I use Node.js to build scalable and high-performance network applications.
          </p>
        </div>
        <div className="tool">
          <img className="toolsImage" src="Brand=mongodb, Style=Light.png" alt="" />
          <h5 className="toolHeading">Mongodb</h5>
          <p className="toolDescription">
          I choose MongoDB for flexible and scalable NoSQL database solutions in seamless data storage and retrieval.</p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
