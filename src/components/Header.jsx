import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>

            <Navbar className="header" >
                <Container>
                    <Navbar.Brand className="logobox" href="#home">Logo</Navbar.Brand>
                    <Nav className="header-boxbuttons" >
                        <Nav.Link className="botones" as={Link} to="/Home">Home</Nav.Link>
                        <Nav.Link className="botones" as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link className="botones" href="#pricing">Ofertas</Nav.Link>
                        <Nav.Link className="botones" as={Link} to="/Tienda">Tienda</Nav.Link>
                        <Nav.Link className="botones-carrito" href="#pricing"><span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}
export default Header;