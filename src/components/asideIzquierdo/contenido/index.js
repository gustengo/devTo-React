import React from "react";
import contents from "./content.json";
import Button from "react-bootstrap/Button";

function buttonContent(props) {
  return contents.map((content) => {
    const { image, title } = content;
    return (
      <div id="contenido">
        
        <Button>{title}</Button>
      </div>
    );
  });
}

export default buttonContent;
