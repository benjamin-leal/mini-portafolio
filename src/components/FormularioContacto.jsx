import { useState } from 'react'

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [aviso, setAviso] = useState('')

  function manejarEnvio(e) {
    e.preventDefault()

    if (nombre === '' || correo === '' || mensaje === '') {
      setAviso('Todos los campos son obligatorios')
    } else if (!correo.includes('@') || !correo.includes('.')) {
      setAviso('El correo no tiene un formato válido')
    } else {
      setAviso('¡Mensaje enviado correctamente!')
    }
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <label>Nombre *</label>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

      <label>Correo electrónico *</label>
      <input value={correo} onChange={(e) => setCorreo(e.target.value)} />

      <label>Mensaje *</label>
      <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} />

      <button type="submit">Enviar mensaje</button>

      <p>{aviso}</p>
    </form>
  )
}

export default FormularioContacto;