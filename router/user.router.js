import { Router } from 'express'

import { userRepository } from '../schemas/user.schemas.js' 

export const router = Router()

/**/
import bcrypt from 'bcrypt'

import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

// capturar body
const app = new express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/**/

router.get('/prueba', validateToken, (req, res) => {
  //Respuesta a la peticion
  res.status(200).json({
    gawr: 'Deploy exitoso nodemos'
  })
})

router.post('/registro', async (req, res) => {
  const user = []
  user.usuario = req.body.usuario ?? null
  user.edad = req.body.edad ?? null
  user.correo = req.body.correo ?? null
  user.contrasenia = req.body.contrasenia ?? null
  user.fechaCreacion = req.body.fechaCreacion ?? null

  //Encriptar contraseña
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(user.contrasenia, saltRounds)
  const user_new = []
  user_new.usuario = user.usuario
  user_new.edad = user.edad
  user_new.correo = user.correo
  user_new.contrasenia = passwordHash
  user_new.fechaCreacion = user.fechaCreacion

  const registro = await userRepository.createAndSave(user_new)
  res.send(registro)
})

/**/
router.post('/auth',async (req, res) => {
  const {username, password} = req.body;

  //Consultar BD y validar que existen tanto
  //username como password
  const user = {username: username};
  const accessToken = generateAccessToken(user);

  res.header('authorization',accessToken).json({
    message: 'Usuario autenticado',
    token: accessToken
  })

})

function generateAccessToken(user){
  return jwt.sign(user, process.env.SECRET_TOKEN, {expiresIn: '10min'});
}
/* */

function validateToken(req, res, next){
  const accessToken = req.headers['authorization'] || req.query.accessToken;
  if(!accessToken) res.send('Access denied');
  jwt.verify(accessToken, process.env.SECRET_TOKEN, (err, user) =>{
    if(err){
      res.send('Access denied, token expired or incorrect');
    }else{
      next();
    }
  })
}


router.get('/:correo/:password', async (req, res) => {
  const correo = req.params.correo
  const users = await userRepository.search()
    .where('correo').equals(correo).return.all()


  res.send(users)
})


/* */
router.get('/buscar/:id', validateToken,  async (req, res) => {
  const user = await userRepository.fetch(req.params.id)
  res.send(user)
})

router.put('/actualizar/:id', async (req, res) => {

  const user = await userRepository.fetch(req.params.id)

  user.usuario = req.body.usuario ?? null
  user.edad = req.body.edad ?? null
  user.correo = req.body.correo ?? null
  user.contrasenia = req.body.contrasenia ?? null
  user.fechaCreacion = req.body.fechaCreacion ?? null

  await userRepository.save(user)

  res.send(user)
})

router.delete('/eliminar/:id', validateToken, async (req, res) => {
  await userRepository.remove(req.params.id)
  res.send({ entityId: req.params.id })
})

export default router