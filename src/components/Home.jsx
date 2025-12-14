import React from "react";


const Home = () => {

    return (
        <div className="homeDiv">

            <div>
                <img className="gallito" src="./src/assets/Gallito.jpg" alt="Fotico del Home" />
            </div>
            
            <div className="big-letter-container">
                <a className="bigLetterTienda" href="./Tienda"><span>Tienda</span></a>
                <a className="bigLetterOfertas" href="./Ofertas"><span>Ofertas</span></a>
                <a className="bigLetterLogin" href="./Login"><span>Login</span></a>
            </div>

            
        </div>);

}
export default Home;