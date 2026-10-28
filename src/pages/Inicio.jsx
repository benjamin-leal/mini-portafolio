import { Link } from "react-router-dom";

function Inicio(){
    return(

    <section>
      <h1>Hola, soy Benjamin Leal</h1>
      <h3>Desarrollador/a Frontend</h3>
      <p>Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí, mis habilidades y proyectos.</p>
      <Link to="/SobreMi" className="boton">Explorar</Link>
    </section>

    );
}


export default Inicio;