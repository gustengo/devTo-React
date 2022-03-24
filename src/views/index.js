import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navegador from "../components/Navbar/index";
import AsideIzquierdo from "../components/asideIzquierdo/index";
import ContentRightAside from "../components/AsideRight/ContentRightAside";
import ContentListings from "../components/AsideRight/ContentListings";
import HastagCard from "../components/AsideRight/HastagCard1";
import HastagCard2 from "../components/AsideRight/HastagCard2";
import Content from "../components/Cards/Content";
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
              <Content />
            </Col>
            <Col>
              <ContentRightAside />
              <ContentListings />
              <HastagCard />
              <HastagCard2 />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
