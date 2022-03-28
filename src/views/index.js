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
  //USE STATES
  const [writers, setWriters] = React.useState([])

  //llamando API *use Effect, cuando Home se monta se ejecuta
  React.useEffect(() => {
    function getWriters() {
      fetch("https://luis-kodemia-devto-api.vercel.app/api/posts")
        .then((response) => response.json()) //obtenemos promesa
        .then((res) => setWriters(res.data)); //Visualizar respuesta
    } //declarando funcion
    getWriters(); //usando funcion
  }, []);

  return (
    <>
      <Navegador />
      <div style={{ backgroundColor: "#ebebeb" }}>
        <Container fluid="sm">
          <Row>
            <Col>
              <AsideIzquierdo />
            </Col>
            <Col xs={6}>
              <Content />
            </Col>
           {/*  <Col xs={6}> {writers.map((writer) => { //se accede a cada writer a traves de mapear el array.

              return (
                <h1> {writer.title} </h1>
              )
            })} </Col> */}
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
