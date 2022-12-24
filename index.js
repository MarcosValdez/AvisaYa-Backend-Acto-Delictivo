/* eslint-disable no-console */
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
/* import responseTime from 'response-time' */

import logger from './app/helpers/logger.js'
import formatMorgan from './app/middleware/morgan.js'
import router from './app/router/root.router.js'
import { startMetricsServer } from './app/helpers/metrics.js'
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

  res.status(200).json({prueba: 'Bienvenidos sean todos ustedes v22'})

})

const puerto = 8080
const ambiente =  process.env.NODE_ENV

/* start the server */
app.listen(puerto, () => {
  logger.info(`La api esta en http://localhost:${puerto}`)
  logger.info(`la app esta corriendo en modo: ${ambiente}`)
  startMetricsServer()
})

export default app

