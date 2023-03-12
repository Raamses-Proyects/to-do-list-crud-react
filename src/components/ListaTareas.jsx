import React from 'react'
import Tarea from './Tarea'

function ListaTareas({ reiniciar, tareasArray, setTareasArray, setTareaSelecionadaObj }) {
  return (
  <>
    { tareasArray.length ? (
      <div className='tareas'>
        <h2>Lista de tareas</h2>
        <ul className='tareas__lista'>
            { tareasArray?.map((datosTarea) => (
              <Tarea key={datosTarea.id}
                datosTarea={datosTarea}
                reiniciar={reiniciar}
                tareasArray={tareasArray}
                setTareasArray={setTareasArray}
                setTareaSelecionadaObj={setTareaSelecionadaObj}
              />
            )) }
          </ul>
      </div>
    ) : (
      <h2>Tus tareas apareceran aquí</h2>
    ) }
  </>
  )
}

export default ListaTareas