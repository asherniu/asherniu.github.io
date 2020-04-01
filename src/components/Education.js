import React from "react";
import Degree from "./Degree";
import "../stylesheets/Education.css";

class Education extends React.Component {
  render() {
    return (
      <div id="education">
        <div className="p-3 p-lg-5 d-flex align-items-start flex-column">
          <h1 className="education-heading">Education</h1>
          <Degree
            school="University of California, Los Angeles"
            date="Sept 2019 - Dec 2020"
            degree="Master in Computer Science"
          />
          <Degree
            school="University of California, Irvine"
            date="Sept 2013 - March 2017"
            degree="Bachelor of Science in Computer Science"
          />
        </div>
      </div>
    );
  }
}

export default Education;
