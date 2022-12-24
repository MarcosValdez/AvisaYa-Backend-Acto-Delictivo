/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import winston from 'winston'
import morgan from 'morgan'

import formatMorgan from './app/middleware/morgan.js'
import router from './app/router/root.router.js'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      json: true
    }),
  ]
})
/* create an express app and use JSON */
const app = new express()
app.use(express.json())
app.use(morgan('combined'))
let corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))
app.use(morgan(formatMorgan.morganJSONFormat(), {
  'stream': {
    write: (message) => {
      const data = JSON.parse(message)
      formatMorgan.parseUserAgent(data)
      formatMorgan.sanitizeUrl(data)
      return logger.info('accesslog', data)
    }
  }
}))
app.use('/api', router)
app.get('/', (req, res) => {
  logger.info('Hi there !')
  res.status(200).json({prueb: 'dasdad'})
})

const puerto = 8080
const ambiente =  process.env.NODE_ENV

/* start the server */
app.listen(puerto, () => {
  logger.info(`La api esta en http://localhost:${puerto}`)
  logger.info(`la app esta corriendo en modo: ${ambiente}`)
})

export default app

