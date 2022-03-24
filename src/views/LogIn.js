import React from "react";
import Navegador from "../components/Navbar/index";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginCard from "../components/LogIn/LoginCard";

function LoginView() {
    return (
      <>
        <Navegador />
        <div style={{backgroundColor:'#ebebeb'}}>
          <Container fluid="sm">
            <Row>
              <Col>
              </Col>
              <Col xs={6}>
              <LoginCard />
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
  
  export default LoginView;