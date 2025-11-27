import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = () => {
const [ products, setProducts ] = useState([]);

useEffect (() => {
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
            { products.map ( (product) => (
                    <Col key = {product.id}>
                        <ProductCard product = {product} />
                    </Col>
            ))}
            </Row>
        </Container>
    );
}

export default ProductList;