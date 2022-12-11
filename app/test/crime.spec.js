/* eslint-disable no-unused-vars */
import app from '../../index.js'
import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const url = 'http://localhost:8080/api/crime'

let idCrime = ''

//Test para Actos Delictos
describe('Testing crime enpoint: ', function() {
  describe('Verificaion de metodos CRUD', function(){

    it('Se deberia registrar un Acto Delictivo: ', (done) => {
      chai.request(url)
        .post('/registro')
        .send({ titulo: 'crime prueba registro',
          descripcion: 'crime prueba registro',
          hora: 'crime prueba registro',
          lugar: 'crime prueba registro',
          referencia: 'crime prueba registro',
          evidencia: 'crime prueba registro',
          fechaCreacion: 'crime prueba registro',
          id_usuario: 'id usuario prueba'
        })
        .end( (err,res) =>{
          idCrime =res.body.entityId
          expect(res).to.have.status(200)
          done()
        })
    })

        
    it('Se deberia buscar un Acto Delictivo: ', (done) => {
      chai.request(url)
        .get('/buscar/'+idCrime)
        .end( (err,res) =>{
          expect(res.body).to.have.property('entityId').to.be.equal(idCrime)
          expect(res).to.have.status(200)
          done()
        })
    })

    it('Se deberia Mostrar todos los Actos Delictivo: ', (done) => {
      chai.request(url)
        .get('/todos')
        .end( (err,res) =>{
          expect(res).to.have.status(200)
          done()
        })
    })

    it('Se deberia actualizar un Acto Delictivo: ', (done) => {
      chai.request(url)
        .put('/actualizar/'+idCrime)
        .send({ titulo: 'crime prueba actualizar',
          descripcion: 'crime prueba actualizar',
          hora: 'crime prueba actualizar',
          lugar: 'Lugar 1',
          referencia: 'crime prueba actualizar',
          evidencia: 'crime prueba actualizar',
          fechaCreacion: 'crime prueba actualizar',
          id: 'id crime prueba actualizar'
        })
        .end( (err,res) =>{
          expect(res.body).to.have.property('lugar').to.be.equal('Lugar 1')
          expect(res).to.have.status(200)
          done()
        })
    })

    it('Se deberia eliminar un Acto Delictivo: ', (done) => {
      chai.request(url)
        .del('/eliminar/'+idCrime)
        .end( (err,res) =>{
          expect(res).to.have.status(200)
          done()
        })
    })

  })
})