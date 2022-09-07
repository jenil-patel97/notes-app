import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <NavbarBrand>React TypeScript - App</NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
