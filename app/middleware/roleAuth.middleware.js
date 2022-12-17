import jwt from 'jsonwebtoken'
import { userRepository } from '../schemas/user.schemas.js'

export const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.headers['authorization'] || req.query.accessToken
    console.log('prueba')

    const tokenData = await jwt.verify(token, process.env.SECRET_TOKEN)
    console.log(tokenData)
    const userData = await userRepository.fetch(tokenData.user_id)
    if ([].concat(roles).includes(userData.role)) {
      next()
    } else {
      res.status(409)
      res.send({ error: 'No tienes permisos' })
    }
  } catch (e) {
    res.status(409)
    res.send({ error: e })
  }

}