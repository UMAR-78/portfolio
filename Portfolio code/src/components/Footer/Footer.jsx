import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="footer">
        <div>
          <h3 className="logoHeading">Umar Jamil</h3>
        </div>
        <div></div>
        <div className="CLASS">
          <h4>Social Platforms</h4>
          <ul>
            <li>
              {" "}
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Gitub</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="CLASS">
          <h4>Quick Contact</h4>
          <ul>
            <li>Instagram</li>
            <li>Gitub</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
