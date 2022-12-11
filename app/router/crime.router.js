import { Router } from 'express'

import { crimeRepository } from '../schemas/crime.schemas.js' 

export const router = Router()

router.get('/buscar/:id', async (req, res) => {
  const crime = await crimeRepository.fetch(req.params.id)
  res.send(crime)
})

router.get('/todos', async (req, res) => {
  const crime = await crimeRepository.search().return.all()
  res.send(crime)
})

router.post('/registro', async (req, res) => {
  const crime = []
  crime.titulo = req.body.titulo ?? null
  crime.descripcion = req.body.descripcion ?? null
  crime.hora = req.body.hora ?? null
  crime.lugar = req.body.lugar ?? null
  crime.referencia = req.body.referencia ?? null
  crime.evidencia = req.body.evidencia ?? null
  crime.fechaCreacion = req.body.fechaCreacion ?? null
  crime.id_usuario = req.body.fechaCreacion ?? null
  const registro = await crimeRepository.createAndSave(crime)
  res.send(registro)
})

router.put('/actualizar/:id', async (req, res) => {

  const crime = await crimeRepository.fetch(req.params.id)

  crime.titulo = req.body.titulo ?? null
  crime.descripcion = req.body.descripcion ?? null
  crime.hora = req.body.hora ?? null
  crime.lugar = req.body.lugar ?? null
  crime.referencia = req.body.referencia ?? null
  crime.evidencia = req.body.evidencia ?? null
  crime.fechaCreacion = req.body.fechaCreacion ?? null
  await crimeRepository.save(crime)

  res.send(crime)
})

router.delete('/eliminar/:id', async (req, res) => {
  await crimeRepository.remove(req.params.id)
  res.send({ entityId: req.params.id })
})

export default router