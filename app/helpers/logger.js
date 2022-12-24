import winston from 'winston'

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'info',
      json: true
    }),
  ]
})

export default logger