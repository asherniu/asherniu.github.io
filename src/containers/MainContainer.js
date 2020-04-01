import React from "react";

import About from "../components/About";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Container from "react-bootstrap/Container";

class MainContainer extends React.Component {
  render() {
    return (
      <Container>
        <About />
        <Education />
        <Experiences />
        <Projects />
      </Container>
    );
  }
}

export default MainContainer;
