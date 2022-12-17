import { Entity, Schema } from 'redis-om'
import client from '../config/client.js'

/* entidad de usuario */
class User extends Entity {}

/* creacion de un esquema para usuarios */
const userSchema = new Schema(User, {
  usuario: { type: 'string' },
  correo: { type: 'string' },
  contrasenia: { type: 'string' },
  fechaCreacion: { type: 'string' },
  role: { type: 'string'}
})

/* usar el cliente para crear un Repositorio solo para usuarios */
export const userRepository = client.fetchRepository(userSchema)

/* crear el índice para usuario */
await userRepository.createIndex()