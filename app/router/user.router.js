import user from '../controllers/user.js'
import { Router } from 'express'
import express from 'express'
import 'dotenv/config'
import { validateToken } from '../middleware/token.middleware.js'

const router = Router()

const app = new express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

router.post('/registro', user.registroUser)

router.post('/auth', user.authUser)

router.get('/buscar/:id', validateToken, user.buscarUser)

router.put('/actualizar/:id', validateToken, user.actualizarUser)

router.delete('/eliminar/:id', validateToken, user.eliminarUser)

export default router