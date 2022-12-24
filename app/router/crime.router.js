import crime from '../controllers/crime.js'
import { Router } from 'express'

const router = Router()

router.get('/buscar/:id', crime.buscarCrime)

router.get('/todos', crime.todosCrime)

router.post('/registro', crime.registroCrime)

router.put('/actualizar/:id', crime.actualizarCrime)

router.delete('/eliminar/:id', crime.eliminarCrime)

export default router