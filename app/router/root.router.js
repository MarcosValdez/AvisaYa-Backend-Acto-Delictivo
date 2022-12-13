import express from 'express'

import userRouter  from './user.router.js'
import crimeRepository from './crime.router.js'

const router = express.Router()

router.use('/user', userRouter)
router.use('/crime', crimeRepository)

export default router