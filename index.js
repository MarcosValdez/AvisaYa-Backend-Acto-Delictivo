import 'dotenv/config'

import express from 'express'

import { router as userRouter } from './user/user-router.js'

/* create an express app and use JSON */
const app = new express()
app.use(express.json())

app.use('/user', userRouter)
app.get('/', (req, res) => {
    //Respuesta a la peticion
    res.status(200).json({
      gawr: 'Deploy exitoso'
    })
  })

const puerto = process.env.PORT
/* start the server */
app.listen(puerto, () => {
    console.log(`La api esta en http://localhost:${puerto}`);
  })
  
