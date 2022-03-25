import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./card.scss";

function cardCommunity() {
  return (
    <>
      <Card id="community" style={{ width: "78%" }}>
        <Card.Body>
          <Card.Title >
              <span id="dev">DEV Community</span> <span id="content">is a community of <br />816,943
              amazing developers. </span>           
          </Card.Title>
          <Card.Text>
            We're a place where coders share, stay up-to-date and grow their
            careers.
          </Card.Text>
          <div id="botones">
            <Button class="botons" variant="outline-light">Go somewhere</Button>
            <Button class="botons" variant="outline-primary">Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default cardCommunity;
