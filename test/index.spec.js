import {router} from '../router/user.router.js'
import app from '../index.js'
import request from 'supertest'

describe('GET /prueba', () => {
    test('deberia responder con un codigo 200', async () =>{
        const response = await request(app).get('/prueba').send()
        expect(response.statusCode).toBe(200)
    })
})