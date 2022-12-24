/* eslint-disable no-unused-vars */
import { userRepository } from '../schemas/user.schemas.js' 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { fechaActual } from '../helpers/date.js'
import { counter } from '../helpers/metrics.js'


const registroUser = async (req, res) => {
  const user = []
  user.usuario = req.body.usuario ?? null
  user.correo = req.body.correo ?? null
  user.contrasenia = req.body.contrasenia ?? null
  
  //Encriptar contraseña
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(user.contrasenia, saltRounds)
  const user_new = []
  user_new.usuario = user.usuario
  user_new.correo = user.correo
  user_new.contrasenia = passwordHash
  user_new.fechaCreacion = fechaActual
  user_new.role = 'user'
  
  const registro = await userRepository.createAndSave(user_new)
  res.send(registro)
  counter.inc()
}

const buscarUser = async (req, res) => {
  const user = await userRepository.fetch(req.params.id)
  res.send(user)
  counter.inc()
}
    
const actualizarUser = async (req, res) => {
  const user = await userRepository.fetch(req.params.id)
    
  user.usuario = req.body.usuario ?? null
  user.correo = req.body.correo ?? null
  user.contrasenia = req.body.contrasenia ?? null
    
  await userRepository.save(user)
    
  res.send(user)
  counter.inc()
}
    
const eliminarUser = async (req, res) => {
  await userRepository.remove(req.params.id)
  res.send({ entityId: req.params.id })
  counter.inc()
}

const authUser = async (req, res) => {  
  const user_auth = []
  user_auth.correo = req.body.correo ?? null
  user_auth.contrasenia = req.body.contrasenia ?? null
  
  //Consultar BD y validar que existen tanto
  const user_data = await userRepository.search()
    .where('correo').equals(user_auth.correo).return.all()
  
  //Password
  let passwordHash = user_data[0] ? user_data[0].contrasenia : false
  const passwordCorrect = user_data[0] === undefined ? false : await bcrypt.compare(user_auth.contrasenia, passwordHash)
  
  if (!(user_data && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid user or password'
    })
  }
  //username como password
  const user_token = {
    username: user_data[0].usuario,
    user_id: user_data[0].entityId,
    role: user_data[0].role}
  const accessToken = generateAccessToken(user_token)
  /*Revisar */
  res.header('authorization',accessToken).json({
    message: 'Usuario autenticado',
    user: user_data[0],
    token: accessToken
  })
  counter.inc()
}
  
function generateAccessToken(user){
  return jwt.sign(user, process.env.SECRET_TOKEN, {expiresIn: '10min'})
}

export default {
  registroUser, 
  buscarUser, 
  actualizarUser, 
  eliminarUser, 
  authUser
}
