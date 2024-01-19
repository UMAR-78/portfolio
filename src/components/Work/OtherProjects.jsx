import React from "react";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import "./OtherProjects.css";

const projects = [
  {
    heading: "MyDoctor.com",
    description:
      "MyDoctor.com is a user-friendly web platform transforming healthcare access. Easily schedule appointments, access medical records, and engage in virtual consultations.",
    links: {
      github: "https://github.com/Muhammad-Hammad-Asghar-56/MyDoctor.git",
      external: "https://github.com/Muhammad-Hammad-Asghar-56/MyDoctor.git",
    },
    techStack: "React Expressjs Nodejs MySql",
  },
  {
    heading: "Front end of Real State",
    description:
      "In this website I use Tailwind css and practice responsivness of mobile version.",
    links: {
      github: "https://github.com/UMAR-78/Real-State-Website-using-Tailwind-Css.git",
      external: "https://lnkd.in/dp5BXH6Z",
    },
    techStack: "HTML CSS TailwindCSS Github",
  },

  {
    heading: "Github Profile Extractor",
    description:
      "GitHub Explorer is a JavaScript-powered project that taps into the GitHub API to provide a comprehensive profile insight.Simply enter username and it will shows your information.",
    links: {
      github: "https://github.com/UMAR-78/GithubProfileApp_Js-Project.git",
      external: "https://lnkd.in/dhtdjddq",
    },
    techStack: "HTML CSS Js Github-API",
  },

  {
    heading: "Clone of Useability Hub website",
    description:
      "Made clone of this website using HTML , CSS as part of my internship at Bytewise Limited",
    links: {
      github: "https://github.com/UMAR-78/clone-Of-useabiltyHub-website.git",
      external: "https://lnkd.in/dMs9d7AM",
    },
    techStack: "HTML CSS ",
  },
 
  // Add more projects as needed
];

const OtherProjects = () => {
  return (
    <div className="otherProjectSection">
      <h2 className="otherProjectHeading">Other Noteworthy Projects</h2>

      <div className="otherProjects">
        {projects.map((project, index) => (
          <div className="project1" key={index}>
            <div className="projectIconsforOtherProjects">
              <a href={project.links.github}>
                <FiGithub className="icon" />
              </a>
              <a href={project.links.external}>
                <GoLinkExternal className="icon" />
              </a>{" "}
            </div>
            <h3 className="headingOfProject">{project.heading}</h3>
            <small>{project.description}</small>
            <div>
              <small className="techStackforOtherProjects">
                {project.techStack}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
