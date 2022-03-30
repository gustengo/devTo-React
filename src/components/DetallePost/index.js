import React, {useEffect, useState} from "react";
import { Card, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import CajaComentarios from '../Comentarios/index'
import { Link } from "react-router-dom";

function DetallePost(props) {
  
    const { title, src, writer, tags, content, idPost } = props;
  
    return (
      <Card className="mb-3 p-4">
        {src && (
          <Card.Img
            variant="top"
            alt="cover-post"
            src={src}
            className="coverPost"
          />
        )}
        <Card.Body className="p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-start">
            <Card.Subtitle>{writer} </Card.Subtitle> 
            <Link to={`/posts/${idPost}/edit`}>
              <Button variant="warning">Edit</Button>
            </Link>
          </div>
          <div className="d-flex flex-column gap-2 mt-3">
            <Card.Title> {title}</Card.Title>
          </div>
          <div className="mb-4">
            <Card.Text>{tags}</Card.Text> 
          </div>
          <div>
            <Card.Text>{content}</Card.Text> 
          </div>
        </Card.Body>
      </Card>
    );
  }


  
  /* const {posts}=props;
return(
  
   
    <div  posts >
    {posts.map((post =>{console.log(post)}))}
   {/*  
        {const {
          title,
          cover_image,
          tag_list,
          url,
          comments_count,
          positive_reactions_count,
          public_reactions_count,
          user,
          published_at} = post}

          

        <Card className="text-center" post>
        <Card.Img variant="top" src={cover_image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{tag_list} {published_at}</Card.Subtitle>
            <Card.Text>
            {title}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
        <ListGroup className="list-group-flush">
    <ListGroupItem>-----</ListGroupItem>
    <CajaComentarios />
    </ListGroup> 
    </Card> }
    </div>)
    
 */
      


export default DetallePost;