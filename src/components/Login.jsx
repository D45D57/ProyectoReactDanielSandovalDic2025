import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user === 'admin' && pass === '1234') {
            navigate('/crud');
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <div className="login-box">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" value={user} placeholder="Ingrese usuario" onChange={e => setUser(e.target.value)} required />

                    <Form.Text className="text-muted">
                        Nunca compartiremos tu contraseña.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese contraseña" value={pass} onChange={e => setPass(e.target.value)} required />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ingresar
                </Button>
            </Form>
        </div>
    )

}

export default Login;