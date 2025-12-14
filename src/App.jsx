// import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Tienda from './components/Tienda';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import Ofertas from './components/Ofertas';
import Crud from './components/Crud';
import "./assets/Styles.css"


function App() {

  return (
      <div className='appTodo'>
        <AuthProvider>
        <CartProvider>
          <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/crud" element={<PrivateRoute><Crud /></PrivateRoute>} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/Ofertas" element={<Ofertas />} />
          </Routes>
          <Footer/>
          </Router>
        </CartProvider>
        </AuthProvider>
        
        <ToastContainer
              position="bottom-right"
              autoClose={1000}
        />
        

      </div>
  )
}

export default App
