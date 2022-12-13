/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import router from './app/router/root.router.js'

/* create an express app and use JSON */
const app = new express()
app.use(express.json())

let corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))

app.use('/api', router)

const puerto = 8080
const ambiente =  process.env.NODE_ENV
/* start the server */
app.listen(puerto, () => {
  console.log(`La api esta en http://localhost:${puerto}`)
  console.log(`la app esta corriendo en modo: ${ambiente}`)
})

export default app

