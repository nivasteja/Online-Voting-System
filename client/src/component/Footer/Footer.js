import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/nivasteja"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by
          Nivas Teja, Rishwanth, Sumanth.
        </p>
        <p>Contact me @  <a
            className="profile"
            href="https://www.facebook.com/nivas.teja.5243"
            target="_blank"
            rel="noopener noreferrer"
          >
            FaceBook
          </a> </p>
      </div>
    </div>
  </>
);

export default Footer;
