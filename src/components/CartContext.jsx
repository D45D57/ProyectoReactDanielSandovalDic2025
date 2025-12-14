import React, { createContext, useState } from 'react';


// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);


    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id === producto.id);
            if (existe) {

                return prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            }

            return [...prevCarrito, { ...producto, cantidad: 1 }];
        });
    };


    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                setCarrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                vaciarCarrito
            }}
        >
            {children}
        </CartContext.Provider>
    );
};



export default CartContext;