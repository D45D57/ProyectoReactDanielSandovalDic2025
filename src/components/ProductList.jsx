import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import CartContext from "./CartContext";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { agregarAlCarrito } = useContext(CartContext);


    useEffect(() => {
        let url = "https://api.escuelajs.co/api/v1/products"

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);

            })
            .catch((error) => {
                console.error('Error fetching data:', error);

            }, []);
    });


    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Col key={product.id}>
                        <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;