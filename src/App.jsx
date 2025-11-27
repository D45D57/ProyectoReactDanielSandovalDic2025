// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import Tienda from './components/Tienda';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import "./assets/Styles.css"
import Crud from './components/Crud';
// import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (

      <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/Tienda" element={<Tienda />} />
      </Routes>
      <Footer/>
      </Router>
      )
}

export default App
