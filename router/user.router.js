import { Router } from 'express'

import { userRepository } from '../schemas/user.schemas.js' 

export const router = Router()

router.post('/:id', async (req, res) => {
    const user = [];
    user.usuario = req.body.usuario ?? null
    user.edad = req.body.edad ?? null
    user.correo = req.body.correo ?? null
    user.contrasenia = req.body.contrasenia ?? null
    user.fechaCreacion = "req.body.fechaCreacion ?? null"
    const registro = await userRepository.createAndSave(user)
    res.send(registro)
})

router.get('/:id', async (req, res) => {
    const user = await userRepository.fetch(req.params.id)
    res.send(user)
})

router.put('/:id', async (req, res) => {

    const user = await userRepository.fetch(req.params.id)

    user.usuario = req.body.usuario ?? null
    user.edad = req.body.edad ?? null
    user.correo = req.body.correo ?? null
    user.contrasenia = req.body.contrasenia ?? null
    user.fechaCreacion = req.body.fechaCreacion ?? null

    await userRepository.save(user)

    res.send(user)
})

router.delete('/:id', async (req, res) => {
    await userRepository.remove(req.params.id)
    res.send({ entityId: req.params.id })
})