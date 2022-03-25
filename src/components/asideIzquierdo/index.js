import React from "react";
import CardCommunity from "./firstCard/index";
import Contenido from "./contenido/index";
import OtherCard from "./otherCard/index";
import Red from "./redes/index"

function asideIzquierdo() {
  return (
    <>
      <br />
      <CardCommunity />
      <Contenido />
      <OtherCard />
      <Red />
    </>
  );
}

export default asideIzquierdo;
