import React from "react";
import Button from "react-bootstrap/Button";
import others from '../otherButtons/others.json'


function otherButtons() {
  return others.map((other) => {
    const { image, title } = other;
    return (
      <div id="contenido">
        <Button id="btn">
          <img class="logos" src={/*icon*/ image} />
          <span>{title}</span>
        </Button>
      </div>
    );
  });
}
export default otherButtons;
