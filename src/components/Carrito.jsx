import React, { useContext, useState } from "react";
import CartContext from "./CartContext";
import { Table, Pagination, Button, Container } from "react-bootstrap";

const Carrito = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const { carrito, setCarrito } = useContext(CartContext);

    // PAGINACIÓN CORRECTA SOBRE CARRITO
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = carrito.slice(indexOfFirstItem, indexOfLastItem);

    const total = carrito.reduce(
        (acc, item) => acc + Number(item.price) * item.cantidad,
        0
    );

    const totalPages = Math.ceil(carrito.length / itemsPerPage);

    const eliminarDelCarrito = (id) => {
        setCarrito(prev => prev.filter(producto => producto.id !== id));
    };

    if (carrito.length === 0) {
        return (
            <Container className="carritoVacio">
                <h3>Tu carrito está vacío</h3>
            </Container>
        );
    }

    return (
        <div className="tablaCarrito">
            <div className="cajaCarrito">
                <h2>Changuito</h2>
                
                    <Table striped hover size="sm">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
        
                        <tbody>
                            {currentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${Number(item.price).toFixed(2)}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${(Number(item.price) * item.cantidad).toFixed(2)}</td>
                                    <td>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => eliminarDelCarrito(item.id)}
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                
    
                <h5 className="text-end">Total a pagar: ${total.toFixed(2)}</h5>
    
                {/* PAGINADOR */}
                <div className="paginator">
                    <Pagination>
                        <Pagination.Prev
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        />
    
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item
                                key={index + 1}
                                active={currentPage === index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </Pagination.Item>
                        ))}
    
                        <Pagination.Next
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        />
                    </Pagination>
                </div>
            </div>
        </div>
    );
};

export default Carrito;