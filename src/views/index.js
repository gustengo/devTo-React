import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navegador from "../components/Navbar/index";
import AsideIzquierdo from "../components/asideIzquierdo/index";
import AsideRight from "../components/AsideRight/SecondCard/";

function Home() {
  return (
    <>
      <Navegador />
      <div style={{backgroundColor:'#ebebeb'}}>
        <Container fluid="sm">
          <Row>
            <Col>
              <AsideIzquierdo />
            </Col>
            <Col xs={6}>
              card
            </Col>
            <Col>
              <AsideRight />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
