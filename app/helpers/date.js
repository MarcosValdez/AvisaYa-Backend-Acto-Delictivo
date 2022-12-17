const fecha = new Date()
const anioActual = fecha.getFullYear()
const hoy = fecha.getDate()
const mesActual = fecha.getMonth() + 1

export const fechaActual = hoy+'/'+mesActual+'/'+anioActual