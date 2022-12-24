import express from 'express'
import client from 'prom-client'

import logger from './logger.js'
const app = express()

export const restResponseTimeHistogram = new client.Histogram({
  name: 'rest_response_time_duration_seconds',
  help: 'REST API response time in seconds',
  labelNames: ['method', 'route', 'status_code'],
})

export const counterActoDelicito = new client.Counter({
  name: 'node_request_registro_total_acto_delictivo',
  help: 'The total number of processed requests',
})
  
export function startMetricsServer() {
  const collectDefaultMetrics = client.collectDefaultMetrics
  
  collectDefaultMetrics()
  
  app.get('/metrics', async (_req, res) => {
    try {
      res.set('Content-Type', client.register.contentType)
      res.send(await client.register.metrics())
    } catch (err) {
      res.status(500).end(err)
    }
  })
  
  app.listen(9100, () => {
    logger.info('Metrics server started at http://localhost:9100')
  })
}
  