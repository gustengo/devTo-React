import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './card.scss'

function cardCommunity() {
  return (
    <Card id='community' style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>DEV Community is a community of 816,943 amazing developers </Card.Title>
        <Card.Text>
          We're a place where coders share, stay up-to-date and grow their careers. 
        </Card.Text>
        <Button variant="outline-light">Go somewhere</Button>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default cardCommunity;
