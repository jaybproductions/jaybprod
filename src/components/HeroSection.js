import React from "react";
import { ReactComponent as CheckMark } from "../images/CheckMark.svg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-title">
        Hello. <br />
        My Name is Chris.
      </div>
      <hr align="left" className="separator" />
      <div className="bio">
        I am a Software Developer with professional experience in mulitple
        programming languages and frameworks. I have a passion for learning new
        technologies and continuing to expand my skillset. Feel free to reach
        out if you have any questions! Thanks.
      </div>
      <div className="work">
        <CheckMark />
        <p>
          Available for software work – say <Link to="/contact">hello</Link>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
