import React from "react";
import Row from 'react-bootstrap/Row'
import Navegador from '../components/Navbar/index'
import AsideIzquierdo from '../components/asideIzquierdo/index'


function Home(){
    return(
        <>
            <Navegador/>
            <Row>
                <AsideIzquierdo />
            </Row>
        </>
    );
}

export default Home;
