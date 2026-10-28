import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <h2>Mi Portafolio Web</h2>
            <nav>
                <ul>
                    <NavLink to="/" end>Inicio</NavLink>
                    <NavLink to="/SobreMi">SobreMi</NavLink>
                    <NavLink to="/Habilidades">Habilidades</NavLink>
                    <NavLink to="/Proyectos">Proyectos</NavLink>
                    <NavLink to="/Contacto">Contacto</NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;