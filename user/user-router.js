import { userRepository } from './user.js' 

import { Router } from 'express'

export const router = Router()

router.put('/', async (req, res) => {
  const user = await userRepository.createAndSave(req.body)
  res.send(user)
})

router.get('/:id', async (req, res) => {
  const user = await userRepository.fetch(req.params.id)
  res.send(user)
})

router.post('/:id', async (req, res) => {

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

export default router;