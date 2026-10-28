import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header className="header">
            <h2>Mi Portafolio Web</h2>
            <nav>
                    <NavLink to="/" end>Inicio</NavLink>
                    <NavLink to="/sobremi">Sobre Mi</NavLink>
                    <NavLink to="/habilidades">Habilidades</NavLink>
                    <NavLink to="/proyectos">Proyectos</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
            </nav>
        </header>
    );
}

export default Header;