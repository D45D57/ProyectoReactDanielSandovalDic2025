import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";
import CartContext from "./CartContext";
import GlobalSpinner from "./GlobalSpinner"; 

const ProductList = ({ categorySlug = null }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { agregarAlCarrito } = useContext(CartContext);
    const [barraDeBusqueda, setBarraDeBusqueda] = useState("");

    useEffect(() => {
        let url = "https://api.escuelajs.co/api/v1/products";
        if (categorySlug) {
            url = `https://api.escuelajs.co/api/v1/products/?categorySlug=${categorySlug}`
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [categorySlug]);



    if (loading) {
        return <GlobalSpinner loading={loading} />;
    }


    const filteredProducts = products.filter(products =>
        products.title.toLowerCase().includes(barraDeBusqueda.toLowerCase()) ||
        products.description.toLowerCase().includes(barraDeBusqueda.toLowerCase())
    );

    return (
        <div style={{marginTop: 100}}>
            <Container className="contenedor-tienda">
                <div className="barraDeBusqueda">
                    <Form.Control
                        type="text"
                        placeholder="Buscar"
                        className="mb-4"
                        value={barraDeBusqueda}
                        onChange={(e) => setBarraDeBusqueda(e.target.value)}
                    />
                </div>
                <div className="contenedeorDeTarjetasTienda">
                    <Row className="cajaCard">
                        {filteredProducts.map((product) => (
                            <Col className="cajaCard2" key={product.id}>
                                <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ProductList;