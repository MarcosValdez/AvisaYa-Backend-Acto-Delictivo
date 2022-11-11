import 'dotenv/config'

import express from 'express'

import { router as userRouter } from './router/user.router.js'

import cors from 'cors';
/* create an express app and use JSON */
const app = new express()
app.use(express.json())

let corsOptions = {
    origin: '*'
};
app.use(cors(corsOptions))


app.use('/user', userRouter)




app.get('/prueba', (req, res) => {
    //Respuesta a la peticion
    res.status(200).json({
      gawr: 'Deploy exitoso nodemos'
    })
})

const puerto = process.env.PORT
const ambiente =  process.env.NODE_ENV
/* start the server */
app.listen(puerto, () => {
    console.log(`La api esta en http://localhost:${puerto}`);
    console.log(`la app esta corriendo en modo: ${ambiente}`);
  })

export default app;