import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navegador from "../components/Navbar/index";
import AsideIzquierdo from "../components/asideIzquierdo/index";
import ContentRightAside from "../components/AsideRight/ContentRightAside";
import ContentListings from "../components/AsideRight/ContentListings";
import HastagCard from "../components/AsideRight/HastagCard1";
import HastagCard2 from "../components/AsideRight/HastagCard2";
import DetallePost from "../components/DetallePost/index";
import AsideIzquierdoDetalle from '../components/AsideIzquierdoDetalle/index'


 function DetallesPost(props) {
  const params = useParams();
  const [posts, setPosts] = useState([]);
  const [dataPost, setDataPost] = React.useState({});
  
 /*  useEffect(()=>{

          function getDetallePost() {
            fetch("https://dev.to/api/articles")
              .then((response) => response.json()) 
              .then((response) => (console.log(response)))
              .then(json=>setPosts(json))
            
          }
          getDetallePost(); 
        }, []); */

        const { title, content, tags, writer } = dataPost;

        React.useEffect(() => {
          async function getPost() {
            const post = await fetch(`https://luis-kodemia-devto-api.vercel.app/api/posts/${params.idPost}`, {
              method: "GET",
              headers: {
                Authorization: "",
              },
            }).then((res) => res.json());
            setDataPost(post.data.post);
          }
          getPost();
        }, [params.idPost]);     
  
        return (
    <>
      <Navegador />
      <div style={{ backgroundColor: "#ebebeb" }}>
        <Container fluid="sm">
          <Row>
            <Col >
              <AsideIzquierdoDetalle />
            </Col>
            <Col xs={8}>
             <DetallePost 
             title={title}
              content={content}
              tags={tags}
             writer={writer}
             idPost={params.id}/>
           
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

export default DetallesPost;