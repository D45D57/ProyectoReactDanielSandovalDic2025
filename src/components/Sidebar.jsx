import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Sidebar() {
    const [show, setShow] = useState(false);
    const { carrito } = useContext(CartContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='contCarritoIcon' variant="none" onClick={handleShow}>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Changuito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='sidebarCaja'>
                    <Button variant={carrito.length === 0 ? "secondary && disabled" : "primary"} as={Link} to="/Carrito">
                        Carrito
                    </Button>
                    {carrito.length === 0 ? (
                        <p>Tu carrito está vacío</p>
                    ) : (
                        <ul className='cart'>
                            {carrito.map((item) => (
                                <li key={item.id} className="mb-2">
                                    <img src={item.images} alt={"😫"} style={{ height: '5rem', width: '5rem', marginRight: '10px' }} />
                                    {item.title.slice(0, 18)} -  {item.cantidad}
                                </li>
                            ))}
                        </ul>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Sidebar;