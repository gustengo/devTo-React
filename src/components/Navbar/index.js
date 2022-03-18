import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../../img/1-logo.png";
import './navbar.scss'

function Navegador() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container >
        <div
          id="izq"
        >
          <Navbar.Brand href="#home">
            <img
              alt="Logo-Dev"
              src={Logo}
              width="40"
              height="33"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <InputGroup className="mb-1">
            <FormControl
              aria-label="Search"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Search"
            />
          </InputGroup>
        </div>
        <div id='der' >
          <Button variant="outline-light">Log in</Button>
          <Button variant="outline-primary">Create account</Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navegador;
