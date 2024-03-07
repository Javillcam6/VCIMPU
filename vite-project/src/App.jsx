import { useState } from 'react'
import './App.css'
import Header from "./components/Header-Menu/Header.jsx";
import { Routes, Route} from 'react-router-dom'
import Inicio from "./components/Inicio/Inicio.jsx" 
import Cursos from "./components/Cursos/Cursos.jsx"
import Recursos from './components/Recursos/Recursos.jsx'
import Perfil from './components/Perfil/Perfil.jsx'
import Carrito from "./components/Carrito/Carrito.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Cursos' element={<Cursos />} />
        <Route path='/Recursos' element={<Recursos />} />
        <Route path='/Carrito' element={<Carrito />} /> 
        <Route path='/Perfil' element={<Perfil />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
