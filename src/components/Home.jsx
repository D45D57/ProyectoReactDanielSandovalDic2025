import React from "react";
import { Container } from "react-bootstrap";
import ProductList from "./ProductList";

const Home = () => {

    return (
        <div className="homeDiv">

            <div className="big-letter-container">
                <a className="bigLetterTienda" href=""><span>Tienda</span></a>
                <a className="bigLetterOfertas" href=""><span>Ofertas</span></a>
                <a className="bigLetterLogin" href=""><span>Login</span></a>
            </div>

            <div>
                <img className="gallito" src=".\src\assets\Gallito.jpg" alt="Fotico del Home" />
            </div>
        </div>);

}
export default Home;