import { useState } from 'react'
import Formulario from './components/Formulario'
import ListaTareas from './components/ListaTareas'


function App() {

  // States Globales
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [tarea, setTarea] = useState('')
  const [tareasArray, setTareasArray] = useState( JSON.parse(localStorage.getItem('tareas')) || [])
  const [tareaSelecionadaObj, setTareaSelecionadaObj] = useState({})


  // Reiciar campos y objeto/tarea seleccionado
  const reiniciar = () => {
    setFecha('')
    setHora('')
    setTarea('')
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
          fecha={fecha}
          setFecha={setFecha}
          hora={hora}
          setHora={setHora}
          tarea={tarea}
          setTarea={setTarea}
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