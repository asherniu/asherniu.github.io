import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

class NavContainer extends React.Component {
  render() {
    return (
      <Navbar
        className="p-3"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand className="d-lg-none">SHIHAO NIU</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Image
            className="d-none d-lg-flex"
            src="/images/avatar.PNG"
            alt="Shihao Niu"
            roundedCircle
            width="48"
          />
          <Nav defaultActiveKey="#about" className="align-items-start">
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link href="#education">EDUCATION</Nav.Link>
            <Nav.Link href="#experiences">EXPERIENCES</Nav.Link>
            {/* <Nav.Link href="#projects">PROJECTS</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavContainer;
