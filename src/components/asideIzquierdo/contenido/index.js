import React from "react";
import contents from "./content.json";
import Button from "react-bootstrap/Button";
import "./contenido.scss"
/*import tag from '../../../img/icons/tags.png'
import contact from '../../../img/icons/contact.png'*/

function buttonContent(props) {
  return contents.map((content) => {
    const { image, title } = content;
   /* let icon = ''
    if(image === 'tag'){
      icon = tag
    } else if (image === 'contact') {
      icon = contact
    } else {
      icon = ''
    }*/
    return (
      <div id="contenido">
        <Button id="btn">
          <img  class = "logos"src={/*icon*/image} />
          <span>{title}</span>
        </Button>
      </div>
    );
  });
}

export default buttonContent;
