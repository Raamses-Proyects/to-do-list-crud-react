import { formatearFecha } from '../helpers/helpers'

function Tarea({ datosTarea, reiniciar, tareasArray, setTareasArray, setTareaSelecionadaObj }) {

    // Extrayendo los datos de la tarea
    const { id, fecha, hora, tarea } = datosTarea
    

    // Funciones
    const eliminar = (id) => {
      const arrayActualizado = tareasArray.filter((t) => t.id !== id)
      setTareasArray(arrayActualizado)
      reiniciar()
    }

    const editar = (id) => {
      // LLenando el objeto para mostrar los datos en los inputs del form
      setTareaSelecionadaObj( tareasArray.find((t) => t.id === id) )
    }
  

    return (
      <li>
        <div className="tareas__datos">
          <p className="tareas__texto">Fecha: <span className="tareas__span">{formatearFecha(fecha)}</span></p>
          <p className="tareas__texto">Hora: <span className="tareas__span">{hora}</span></p>
          <p className="tareas__texto">Descripción: <span className="tareas__span">{tarea}</span></p>
        </div>
        <div className="tareas__acciones">
          <button 
            onClick={() => editar(id)} type="button"
            className="tareas__button tareas__button--editar"
            >Editar</button>

          <button onClick={() => eliminar(id)}
            type="button"
            className="tareas__button tareas__button--eliminar"
            >Eliminar</button>
        </div>
      </li>
    )
  }

export default Tarea