import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import { generarId, existeTarea, sincronizarStorage } from '../helpers/helpers'

function Formulario({ // extrayendo props
  fecha,
  setFecha,
  hora,
  setHora,
  tarea,
  setTarea,
  tareasArray, 
  setTareasArray, 
  tareaSelecionadaObj,
  reiniciar }) {
  
  
  // State Local
  const [error, setError] = useState(false)
  

  // Cada vez que el usuario seleccione una tarea
  useEffect(() => {
    if( existeTarea(tareaSelecionadaObj) ) { // Se llenan los inputs del formulario
      setFecha(tareaSelecionadaObj.fecha)
      setHora(tareaSelecionadaObj.hora)
      setTarea(tareaSelecionadaObj.tarea)
    }
  }, [tareaSelecionadaObj])


  // Sincronizar con localStorage cada vez que haya un cambio en el array ya sea para hacer un insert o un delete
  // (si por ejemplo se coloca en la condicion del insert no funciona)
  useEffect(() => {
    sincronizarStorage('tareas', tareasArray)
  }, [tareasArray])


  // Submit para Agregar y Actualizar
  function handleSubmit(e) {
    e.preventDefault()

    // Validación
    const datos = [fecha, hora, tarea]
    if( datos.includes('') ) {
      setError(true)
      return
    }

    // Quitando alerta de error
    setError(false)

    // Creando objeto con los datos enlazados con lo que ingresa el usuario
    const objTarea = { fecha, hora, tarea: tarea.trim('') }

    // Actualizar registro selecionado
    if( existeTarea(tareaSelecionadaObj) ) {
      // Agregando el id del objeto/tarea seleccionado al objeto que va a estar enlazado con lo que ingrese el usuario
      objTarea.id = tareaSelecionadaObj.id
      const arrayActualizado = tareasArray.map((t) => {
        if( t.id === objTarea.id ) {
          return objTarea
        }
        else {
          return t
        }
      })

      // Actualizando array de lista de tareas
      setTareasArray(arrayActualizado)
      sincronizarStorage('tareas', arrayActualizado)
    }
    else { // Insertando registro
      objTarea.id = generarId()
      setTareasArray([ ...tareasArray, objTarea ]) // Agregando objeto/tareas al array
    }

    // Reiniciando el formulario y el objeto de la tarea seleccionada
    reiniciar()
  }


  return (
  <div className='formulario'>
    <h2>Ingresar Datos</h2>
    <form onSubmit={ handleSubmit } className='formulario__contenido'>      
      <label htmlFor="fecha" className='formulario__label'>Fecha:</label>
      <input 
        onChange={ (e) => setFecha(e.target.value) }
        value={fecha}
        type="date" 
        id='fecha' 
        name='fecha'
        className='formulario__input' />

      <label htmlFor="hora" className='formulario__label'>Hora:</label>
      <input 
        onChange={ (e) => setHora(e.target.value) }
        value={hora}
        type="time" 
        id='hora' 
        name='hora'
        className='formulario__input' />

      <label htmlFor="descripcion" className='formulario__label'>Descripción:</label>
      <textarea
        onChange={ (e) => setTarea(e.target.value) }
        value={tarea}
        id="descripcion" 
        name="descripcion"
        cols="30" 
        rows="10"
        className='formulario__input'
        placeholder='Descripción de la tarea'></textarea>
         { error && <Alerta mensaje='Todos los campos son obligatorios'/> }
      <button 
        type="submit" className='formulario__submit'>{ existeTarea(tareaSelecionadaObj) ? 'Actualizar tarea' : 'Agregar tarea' }</button>
    </form>
  </div>
  )
}

export default Formulario