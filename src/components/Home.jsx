import React from "react";
import  gallito  from "../assets/Gallito.jpg";


const Home = () => {

    return (
        <div className="homeDiv">

            <div className="divGallito">
                <img className="gallito" src={gallito} alt="Fotico del Home" />
            </div>
            
            <div className="big-letter-container">
                <a className="bigLetterTienda" href="./Tienda"><span>Tienda</span></a>
                <a className="bigLetterOfertas" href="./Ofertas"><span>Ofertas</span></a>
                <a className="bigLetterLogin" href="./Login"><span>Login</span></a>
            </div>

            
        </div>);

}
export default Home;