import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";

function Header() {
    return (
        <Navbar className="header" >
            <Container>
                <Navbar.Brand className="logobox" href="#home"><span>Kikiri</span><span>boo</span></Navbar.Brand>
                <Nav className="header-boxbuttons" >
                    <Nav.Link className="botones" as={Link} to="/"><span>Home</span></Nav.Link>
                    <Nav.Link className="botones" as={Link} to="/login"><span>Login</span></Nav.Link>
                    <Nav.Link className="botones" href="#ofertas"><span>Ofertas</span></Nav.Link>
                    <Nav.Link className="botones" as={Link} to="/Tienda"><span>Tienda</span></Nav.Link>
                    <Nav.Link className="botones-carrito" href="#sidebar">
                        <Sidebar />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default Header;