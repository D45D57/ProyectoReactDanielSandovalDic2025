import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

function HeaderNavbar() {
    return (
        <Navbar className="header" >
            
                <Nav className="header-boxbuttons" >
                    <Nav.Link className="botones" as={Link} to="/"><span>Home</span></Nav.Link>
                    <Nav.Link className="botones" as={Link} to="/login"><span>Login</span></Nav.Link>
                    <Nav.Link className="botones" as={Link} to="/Ofertas"><span>Ofertas</span></Nav.Link>
                    <Nav.Link className="botones" as={Link} to="/Tienda"><span>Tienda</span></Nav.Link>
                </Nav>
            
        </Navbar>
    )
}

export default HeaderNavbar;

