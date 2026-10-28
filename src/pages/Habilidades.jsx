const habilidades = [
  { nombre: 'HTML', nivel: 90 },
  { nombre: 'CSS', nivel: 85 },
  { nombre: 'JavaScript', nivel: 75 },
  { nombre: 'React', nivel: 70 },
]

const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Node.js']

function Habilidades(){
    return(

    <section>
        <h1>Habilidades y Lenguajes</h1>

        <h3>Tecnologías</h3>
        <div className="grid">
            {habilidades.map((h) => (
            <div className="tarjeta" key={h.nombre}>
                <h4>{h.nombre}</h4>
                <p>Nivel: {h.nivel}%</p>
            </div>
            ))}
        </div>

        <h3>Herramientas</h3>
        <div className="etiquetas">
            {herramientas.map((t) => (
            <span key={t}>{t}</span>
            ))}
        </div>
    </section>

    );
}

export default Habilidades;