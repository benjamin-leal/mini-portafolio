import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos'
import Habilidades from './pages/Habilidades'
import Contacto from './pages/Contacto'

function App() {

  return (
    <Routes>
        <Route path='/' element={<Layout/>}> 

        <Route index element={<Inicio/>} /> 

        <Route path='/sobremi' element={<SobreMi/>} /> 
        <Route path='/habilidades' element={<Habilidades/>} /> 
        <Route path='/proyectos' element={<Proyectos/>} /> 
        <Route path='/contacto' element={<Contacto/>} /> 

      </Route>
    </Routes>
  );
}

export default App;
