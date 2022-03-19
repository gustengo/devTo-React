import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.scss";

function cardCommunity() {
  return (
    <>
      <Card id="community" style={{ width: "16rem" }}>
        <Card.Body>
          <Card.Title>
            <span>DEV Community</span> is a community of 816,943 amazing
            developers{" "}
          </Card.Title>
          <Card.Text>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </Card.Text>
          <div>
            <Button variant="outline-light">Go somewhere</Button>
            <Button variant="outline-primary">Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default cardCommunity;
