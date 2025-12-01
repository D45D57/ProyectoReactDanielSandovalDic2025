// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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

import "./assets/Styles.css"
import Crud from './components/Crud';
// import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
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
        </Routes>
        <Footer/>
        </Router>
      </CartProvider>
      </AuthProvider>
      )
}

export default App
