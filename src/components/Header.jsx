import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import HeaderNavbar from "./HeaderNavbar";

function Header() {

    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div style={{ backgroundColor: isHome ? 'transparent' : 'rgb(21, 9, 27)' }}className="headerEspacio">

            <Navbar.Brand className="logobox" href="#home"><span>Kikiri</span><span>Boo</span>
            </Navbar.Brand>

            {!isHome && <HeaderNavbar />}

            <Nav.Link className="botones-carrito" href="#sidebar">
                <Sidebar />
            </Nav.Link>


            
        </div>
    );
}
export default Header;