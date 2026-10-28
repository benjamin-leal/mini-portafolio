function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <a href={enlace} target="_blank" rel="noreferrer">Ver proyecto </a> 
    </div>
    
  )
}

export default TarjetaProyecto;

