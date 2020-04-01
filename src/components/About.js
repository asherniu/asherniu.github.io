import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../stylesheets/About.css";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="pt-5">
        <div className="p-3 p-lg-5 d-flex align-items-start flex-column">
          <h1 className="about-heading">
            {" "}
            Shihao <span> Niu </span>{" "}
          </h1>
          <div className="about-subheading">
            Los Angeles · CA ·{" "}
            <a href="mailto:asherniu@gmail.com">asherniu@gmail.com</a>
          </div>
          <p className="about-body" align="left">
            I am a Chinese expat who is currently pursing a Master in Computer
            Science degree from UCLA. Thanks for visiting my profile site.
          </p>
        </div>
        <div className="py-1 px-3 p-lg-5 d-flex">
          <div className="pr-2">
            <a href="https://www.linkedin.com/in/shihao-n-754932a9/">
              <FaLinkedinIn size={56} color={"black"} />
            </a>
          </div>
          <div className="pl-2">
            <a href="https://github.com/asherniu/">
              <FaGithub size={56} color={"black"} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
