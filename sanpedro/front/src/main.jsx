import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import NovedadesPage from './pages/NovedadesPage'
import PuntosPage from './pages/PuntosPage'
import ContactoPage from './pages/ContactoPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import './normalize.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
   <Nav />
   <Routes>
    < Route path="/" element={<HomePage/>} />
    < Route path="/novedades" element={<NovedadesPage/>} />
    < Route path="/puntos" element={<PuntosPage/>} />
    < Route path="/contacto" element={<ContactoPage/>} />
   </Routes>
   </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
)
