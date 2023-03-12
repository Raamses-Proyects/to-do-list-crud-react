export const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return random + fecha
}

export const existeTarea = (objeto) => {
    return Object.values(objeto).length > 0
}

export const sincronizarStorage = (nombre, array) => {
    localStorage.setItem(nombre,  JSON.stringify(array))
}

export const formatearFecha = (fecha) => {
    let nuevaFecha
    if (!fecha.includes('T00:00:00.000Z')) {
        // console.log(fecha.split('T')[0].split('-'));
      nuevaFecha = new Date(fecha.split('-'))
    } else {
      nuevaFecha = new Date(fecha)
    }
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
}