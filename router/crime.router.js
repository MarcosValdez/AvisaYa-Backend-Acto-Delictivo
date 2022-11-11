import { crimeRepository } from '../schemas/crime.schemas.js' 

import { Router } from 'express'

export const router = Router()

router.post('/', async (req, res) => {
    const crime = [];
    crime.titulo = req.body.titulo ?? null
    crime.descripcion = req.body.descripcion ?? null
    crime.hora = req.body.hora ?? null
    crime.lugar = req.body.lugar ?? null
    crime.referencia = req.body.referencia ?? null
    crime.evidencia = req.body.evidencia ?? null
    crime.fechaCreacion = "req.body.fechaCreacion ?? null"
    const registro = await crimeRepository.createAndSave(crime)
    res.send(registro)
})

router.get('/:id', async (req, res) => {
    const crime = await crimeRepository.fetch(req.params.id)
    res.send(crime)
})

router.put('/:id', async (req, res) => {

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

router.delete('/:id', async (req, res) => {
    await crimeRepository.remove(req.params.id)
    res.send({ entityId: req.params.id })
})
