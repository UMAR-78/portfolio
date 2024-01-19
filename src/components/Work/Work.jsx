import React from "react";
import "./Work.css";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
const Work = () => {
  return (
    <div className="container2 WorkSection">
      <h1 className="contentHeading">
        <span>04. </span>Work <span className="spanLine"></span> <br />
      </h1>

      <div className="ProjectSection">
        <div className="LeftSideWORK">
          <small className="Feature">Featured Project</small>
          <h3 className="headingOfProject">
            Build a Front End of Real State Website
          </h3>
          <div className="textAboutSection">
            <small className="textAboutProject">
              Having Struggled with understanding of Framer Motion: Elevate user
              experience with captivating animations and seamless transitions.{" "}
              <br />
              React CountUp: Bring property prices to life with dynamic and
              eye-catching number animations. <br /> React Accessible Accordion:
              Ensure easy navigation with a user-friendly accordion feature,
              enhancing accessibility.
              <br /> Swiper: Showcase property images elegantly through a
              stunning image slider.
            </small>
          </div>
          {/* <br /> */}
          <p className="techStack">React Figma FramerMotion Vercel </p>
          <div className="projectIcons">
            <a href="https://github.com/UMAR-78/Real-State-Website.git">
              <FiGithub className="icon" />
            </a>
            <a href="https://real-state-website-7jtn.vercel.app/">
              <GoLinkExternal className="icon" />
            </a>{" "}
          </div>
        </div>

        <div className="RightSideWORK">
          <div className="imageSection">
            <a href="https://real-state-website-7jtn.vercel.app/">
              <img
                className="ProjectImage"
                src="Real State project.png"
                alt=""
              />
              <div class="overlay"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="ProjectSectionForRightImage">
        <div className="RightSideWORK">
          <div className="imageSection">
            <a href="https://github.com/UMAR-78/Railway_Station_System.git">
              <img
                className="ProjectImage"
                src="Rail Booker Project.png"
                alt=""
              />
              <div class="overlay"></div>
            </a>
          </div>
        </div>
        <div className="LeftSideWORKForRightImage">
          <small className="Feature">Featured Project</small>
          <h3 className="headingOfProject">Build a Railway Ticketing App</h3>
          <div className="textAboutSection">
            <small className="textAboutProject">
              RailBooker.com, a user-friendly web application I crafted using
              the MERN stack. This platform is all about simplifying <br />the train
              booking experience, offering easy navigation and real-time
              updates. With a personalized profile feature and secure payments,
              RailBooker.com ensures a hassle-free and secure journey. It's my
              way of transforming the train travel process into something
              straightforward and enjoyable for everyone
            </small>
          </div>
          {/* <br /> */}
          <p className="techStack">React Expressjs Nodejs MongoDb </p>
          <div className="projectIcons">
            <a href="https://github.com/UMAR-78/Railway_Station_System.git">
              <FiGithub className="icon" />
            </a>
            <a href="https://github.com/UMAR-78/Railway_Station_System.git">
              <GoLinkExternal className="icon" />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
