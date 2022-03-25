import React from "react";
import Button from "react-bootstrap/Button";
import redes from "./logos-redes.json"

function redesButtons(){
    return redes.map((red) => {
        const { image } = red;
        return (
          <div id="contenido">
            <Button id="btn-redes" variant="link">
              <img class="logos" src={/*icon*/ image} />
            </Button>
          </div>
        );
      });
}

export default redesButtons;
