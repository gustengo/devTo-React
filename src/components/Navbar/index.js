import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Logo from "../../img/1-logo.png";

function Navegador(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <div style={{display:'flex',flexDirection:'row', alignItems:"center", width:'40%'}}>
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
        <Nav.Link href="#home2">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navegador;
