import React from 'react';
import {Nav} from 'react-bootstrap';
import { BiHeart } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { GiUnicorn } from "react-icons/gi/";


function AsideIzquierdoDetalle(){
    return(

        <Nav defaultActiveKey="/home" className="flex-column" >
  <Nav.Link href="/home"> <i> <BiHeart/> </i> </Nav.Link>
  <Nav.Link eventKey="link-2"><i> <GiUnicorn/> </i></Nav.Link>
  <Nav.Link eventKey="link-1"><i> <BsBookmark/> </i></Nav.Link>

</Nav>
    );
}

export default AsideIzquierdoDetalle; 