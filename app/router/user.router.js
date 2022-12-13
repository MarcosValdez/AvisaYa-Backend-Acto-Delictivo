import user from '../controllers/user.js'
import { Router } from 'express'
import express from 'express'
import 'dotenv/config'

const router = Router()

const app = new express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

router.post('/registro', user.registroUser)

router.post('/auth', user.authUser)

router.get('/buscar/:id', user.buscarUser)

router.put('/actualizar/:id', user.actualizarUser)

router.delete('/eliminar/:id', user.eliminarUser)

export default router