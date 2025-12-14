import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal, Pagination } from "react-bootstrap";
import { toast } from "react-toastify";


const API_URL = "https://api.escuelajs.co/api/v1/products";
const Crud = () => {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = productos.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(productos.length / itemsPerPage);

    const getProductos = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {

                const productsWithStock = data.map(product => ({
                    ...product,
                    stock: Math.floor(Math.random() * 50) + 1
                }));
                setProductos(productsWithStock);
            })
            .catch((error) => console.error("Error al obtener productos:", error));
    };

    const getCategorias = () => {
        fetch("https://api.escuelajs.co/api/v1/categories")
            .then((res) => res.json())
            .then((data) => setCategorias(data))
            .catch((error) => console.error("Error al obtener categorías:", error));
    };

    useEffect(() => {
        getProductos();
        getCategorias();
    }, []);

    const eliminarProducto = (id) => {
        if (!window.confirm("¿Seguro que quieres eliminar este producto?")) return;

        fetch(`${API_URL}/${id}`, { method: "DELETE" })
            .then((res) => {
                if (!res.ok) throw new Error("Error al eliminar el producto");
                getProductos();
            })
            .catch((error) => console.error("Error:", error));
    };

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setForm({ title: "", description: "", price: "", stock: "", categoryId: "", image: "" });
        setEditId(null);
    };

    const handleShow = (producto) => {
        setShow(true);
        if (producto) {
            setForm({
                ...producto,
                price: Number(producto.price),
                stock: Number(producto.stock),
            });
            setEditId(producto.id);
        }
    };

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        image: "",
    });

    const [editId, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const productData = {
            ...form,
            price: Number(form.price),
            categoryId: Number(form.categoryId),
            images: [form.image],
        }


        const method = editId ? "PUT" : "POST";
        const url = editId ? `${API_URL}/${editId}` : API_URL;

        fetch(url, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productData),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error al guardar el producto");
                return res.json();
            })
            .then(() => {
                handleClose();
                getProductos();
                toast.success( editId? "Producto Editado" : "Producto Creado");
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleDelete = (id) => {
        eliminarProducto(id);
        toast.success("Producto Eliminado!")
    };

    return (

        <>

            <div className="crudBackground">


                <div className="crudbox">

                    <h2>Productos</h2>

                    <Button variant="outline-light" onClick={() => handleShow()}>
                        Agregar
                    </Button>

                    <div className="tablaCrud">
                        <Table striped hover size="sm">
                            <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Imagen</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((prod) => (


                                    <tr key={prod.id}>
                                        <td>{prod.title}</td>
                                        <td>{prod.description}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.stock}</td>
                                        <td>{prod.category.image?.startsWith("https") ? (
                                            <img
                                                src={prod.category.image}
                                                alt={prod.title}
                                                width={50}
                                                height={50}
                                                style={{ objectFit: "cover" }} />
                                        ) : (
                                            <span>{prod.image}</span>
                                        )}</td>
                                        <td className="botones-agregar-eliminar">
                                            <Button className="botones-agregar-eliminar" onClick={() => handleShow(prod)}>Editar</Button>
                                            <Button className="botones-agregar-eliminar" onClick={() => handleDelete(prod.id)}>Eliminar</Button>
                                        </td>
                                    </tr>

                                ))}
                            </tbody>
                        </Table>
                        <div className="paginator">
                            <Pagination>

                                <Pagination.Prev
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                />

                                {[...Array(totalPages).keys()].map((number) => (
                                    <Pagination.Item
                                        key={number + 1}
                                        active={currentPage === number + 1}
                                        onClick={() => setCurrentPage(number + 1)}
                                    >
                                        {number + 1}
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
            </div>

            <div className="modalBox">

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>{editId ? "Editar" : "Agregar"} Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formTitulo">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" value={form.title} placeholder="" onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescripcion">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="Text" placeholder="" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrecio">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="Number" placeholder="" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formStock">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="Number" placeholder="" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCategoria">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Select
                                    value={form.categoryId}
                                    onChange={e => setForm({ ...form, categoryId: e.target.value })}
                                    required
                                >
                                    <option value="">Selecciona una categoría</option>
                                    {categorias.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formImagen">
                                <Form.Label>Imagen URL</Form.Label>
                                <Form.Control type="Text" placeholder="" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} required />
                            </Form.Group>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" type="submit" >
                                    Guardar
                                </Button>
                            </Modal.Footer>

                        </Form>

                    </Modal.Body>

                </Modal >

            </div>

        </>
    )
};

export default Crud;