import React from "react";
import Experience from "./Experience";
import "../stylesheets/Experiences.css";

class Experiences extends React.Component {
  render() {
    const descriptions = [
      [
        "Collaborate with marketing teams, UI designers and product managers to develop a food delivery app targeting Chinese international students in South Cal, with thousands of orders per day on average.",
        "Develop, test, and maintain native Android applications written in Java, with hundreds of installments.",
        "Participate in fast-paced development cycles and work in a startup environment.",
      ],

      [
        "Design, build, and maintain lightweight and responsive UI with Vue.js, HTML, CSS and JavaScript.",
        "Experience with Vuetify and other JavaScript library.",
        "Create integration tests and routinely reviewed peer code submissions.",
        "Worked with other developers, QA, DevOps and product managers to efficiently launch features and resolve issues.",
        "Contribute to the replatforming of our entire web application. ",
      ],

      [
        "Verify product features and performance, and communicate with developers, product managers to resolve bugs and reduce scope creep.",
        "Write test scripts to automate parallel UI testing with Selenium remote server.",
        "Write test scripts with TestNG framework to test backend server and postgres database.",
        "Write test scripts to test interactions with AWS cloud server.",
      ],
    ];
    return (
      <div id="experiences">
        <div className="p-3 p-lg-5 d-flex align-items-start flex-column">
          <h1 className="experience-heading">Experiences</h1>
          <Experience
            place="Cheftown"
            title="Android Developer"
            date="Aug 2019 - Dec 2019"
            description={descriptions[0]}
          />
          <Experience
            place="Inmobi"
            title="SDE"
            date="Jan 2019 - Jun 2019"
            description={descriptions[1]}
          />
          <Experience
            place="AerServ"
            title="QA Developer"
            date="May 2017 - Jan 2019"
            description={descriptions[2]}
          />
        </div>
      </div>
    );
  }
}

export default Experiences;
