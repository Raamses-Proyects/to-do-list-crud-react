import { useState } from 'react'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'


function App() {

  // States Globales
  const [tareasArray, setTareasArray] = useState( JSON.parse(localStorage.getItem('tareas')) || [])
  const [tareaSelecionadaObj, setTareaSelecionadaObj] = useState({})


  // State y funcion para obtener datos de manera dinamica
  const [datos, setDatos] = useState({fecha: '', hora: '', tarea: ''})
  const handleChangeDatos = (e) => {
    setDatos( { ...datos, [e.target.name]: e.target.value } )
  }


  // Reiciar campos y objeto/tarea seleccionado
  const reiniciar = () => {
    setDatos({fecha: '', hora: '', tarea: ''})
    setTareaSelecionadaObj({})
  }


  return (
  <>
    <header className='mt-5'>
      <h1>To do <span>List</span></h1>
    </header>
    <div className='principal contenedor'>
      <div className='principal__grid'>
        <Formulario
          datos={datos}
          setDatos={setDatos}
          handleChangeDatos={handleChangeDatos}
          tareasArray={tareasArray}
          setTareasArray={setTareasArray}
          tareaSelecionadaObj={tareaSelecionadaObj}
          reiniciar={reiniciar}
        />
        <ListaTareas
          reiniciar={reiniciar}
          tareasArray={tareasArray}
          setTareasArray={setTareasArray}
          setTareaSelecionadaObj={setTareaSelecionadaObj}
        />
      </div>
    </div>
    <footer className='mt-5'>
      <div className='footer-line'></div>
    </footer>
  </>
  )
}

export default App