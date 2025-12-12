import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductCard = ({ product, agregarAlCarrito }) => {

  const handleAdd = () => {
    agregarAlCarrito(product);
    toast.success("Producto agregado!");
  };

  return (
    <Card style={{ width: '20rem'}}>
      <Card.Img
        variant="top"
        src={product.category.image}
        style={{ 
          height: '300px', 
          //objectFit: 'contain', // ajusta sin recortar
          objectFit: 'cover', 
          objectPosition: 'center', // centra la imagen
        }}
      />
      <Card.Body>
        <Card.Title>{product.title.slice(0, 20)}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 30)}...
        </Card.Text>
        <div className="cardButtonAgregar">
          <Button variant="primary" onClick={handleAdd}>
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;