import React, { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef();

  const handleClickOutside = (event) => {
    if (navLinksRef.current && !navLinksRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="container Header">
        <h2>Umar Jamil</h2>
        <div className="menu">
          <IoMdMenu
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
        <div ref={navLinksRef} className={`navLinks ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">01.</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">02.</span> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/expereince" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">03.</span> Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">04.</span> Work
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">05.</span> Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                <span className="navLinkNumber">06.</span> Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={`SocialLinks ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/umar-jamil-dev/">
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a href="https://github.com/UMAR-78">
                <FaGithub className="icon" />
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
