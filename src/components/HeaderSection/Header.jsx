import React, { useState } from "react";
import "./Header.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="container Header">
        <h2>Umar Jamil</h2>
        <div className="menu">
          <IoMdMenu className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
        <div className={`navLinks ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/"><span className="navLinkNumber">01.</span>  Home</NavLink>
            </li>
            <li>
              <NavLink to="/"><span className="navLinkNumber">02.</span>  About</NavLink>
            </li>
            
            <li>
              <NavLink to="/"><span className="navLinkNumber">02.</span>  Experience</NavLink>
            </li>
            <li>
              <NavLink to="/"><span className="navLinkNumber">04.</span>  Work</NavLink>
            </li>
            <li>
              <NavLink to="/"><span className="navLinkNumber">05.</span>  Services</NavLink>
            </li>

            <li>
              <NavLink to="/contact"><span className="navLinkNumber">06.</span>  Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className={`SocialLinks ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/umar-jamil-dev/">
                <FaLinkedin className="icon"/>
              </a>
            </li>
            <li>
              <a href="https://github.com/UMAR-78">
                <FaGithub className="icon"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <FaInstagram className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
