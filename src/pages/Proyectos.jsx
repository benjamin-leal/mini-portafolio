import TarjetaProyecto from "../components/TarjetaProyecto";

const proyectos = [
    {titulo: "Gestor de Tareas Kanban", 
     descripcion: "Aplicacion web para la gestion de tareas con metodologia Kanban",
     enlace: "https://github.com/usuarioRandom/gestor_kanban"
    },
    {titulo: "Portafolio Personal",
     descripcion: "Sitio web personal para mostrar mis habilidades y proyectos. Desarrollado con React y React Router",
     enlace: "https://github.com/usuarioRandom/portafolio_personal"
    }
]




function Proyectos(){
    return(

        <section>
            <h1>Mis Proyectos</h1>
            <p>Alguno de los proyectos en los que he trabajado</p>

        {proyectos.map((p) => ( 
         <TarjetaProyecto
           key={p.titulo}
           titulo={p.titulo}
           descripcion={p.descripcion}
           enlace={p.enlace}
          />
        ))}



        </section>

    );
}

export default Proyectos;



