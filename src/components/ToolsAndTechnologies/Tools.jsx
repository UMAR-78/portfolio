import React from "react";
import "./Tools.css";

const toolsData = [
  {
    imageSrc: "Brand=figma, Style=Light.svg",
    heading: "Figma",
    description:
      "I design user interfaces collaboratively using Figma, streamlining teamwork.",
  },
  {
    imageSrc: "githubDark.png",
    heading: "Github",
    description:
      "I leverage GitHub for efficient version control and collaborative software development.",
  },
  {
    imageSrc: "Brand=html5, Style=Light.svg",
    heading: "HTML 5",
    description:
      "I implement HTML5 for structured and enhanced web content presentation.",
  },
  {
    imageSrc: "Brand=tailwind, Style=Light.png",
    heading: "Tailwind",
    description:
      "I optimize styling with Tailwind CSS, embracing its utility-first approach to effortlessly create and customize styles in web development.",
  },
  {
    imageSrc: "Brand=redux, Style=Light.png",
    heading: "Redux Toolkit",
    description:
      "I implement Redux Toolkit to streamline state management in React applications, ensuring efficiency and maintainability.",
  },
  {
    imageSrc: "Brand=reactjs, Style=Light.svg",
    heading: "React js",
    description:
      "I employ ReactJS for dynamic and interactive user interfaces in web applications.",
  },
  {
    imageSrc: "Brand=postman, Style=Light.png",
    heading: "Postman",
    description:
      "I depend on Postman for efficient API testing and development, fostering collaboration and ensuring robust testing.",
  },
  {
    imageSrc: "Brand=nodejs, Style=Light.svg",
    heading: "Node js",
    description:
      "I use Node.js to build scalable and high-performance network applications.",
  },
  {
    imageSrc: "Brand=mongodb, Style=Light.png",
    heading: "Mongodb",
    description:
      "I choose MongoDB for flexible and scalable NoSQL database solutions in seamless data storage and retrieval.",
  },
];

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
        {toolsData.map((tool, index) => (
          <div key={index} className="tool">
            <img className="toolsImage" src={tool.imageSrc} alt="" />
            <h5 className="toolHeading">{tool.heading}</h5>
            <p className="toolDescription">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
