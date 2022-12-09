import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const url = 'http://localhost:8080/user'

// eslint-disable-next-line no-unused-vars
let idUser = ''

describe('Testing user enpoint: ', function() {
  describe('Verificaion de metodos CRUD', function(){
    it('Se deberia registrar un usuario: ', (done) => {
      chai.request(url)
        .post('/registro')
        .send({ usuario: 'user prueba v2',
          edad: '24',
          correo: 'user_prueba_v2',
          contrasenia: 'user_prueba_v2',
          fechaCreacion: 'user_prueba_v2'
        })
        .end( (err,res) =>{
          idUser =res.body.entityId
          expect(res).to.have.status(200)
          done()
        })
    })

    /* it('Se deberia buscar un usuario: ', (done) => {
      chai.request(url)
        .get('/buscar/'+idUser)
        .end( (err,res) =>{
          expect(res.body).to.have.property('entityId').to.be.equal(idUser)
          expect(res).to.have.status(200)
          done()
        })
    })

    it('Se deberia actualizar un usuario: ', (done) => {
      chai.request(url)
        .put('/actualizar/'+idUser)
        .send({ usuario: 'user prueba v3',
          edad: '50',
          correo: 'user_prueba_v3',
          contrasenia: 'user_prueba_v3',
          fechaCreacion: 'user_prueba_v3'
        })
        .end( (err,res) =>{
          expect(res.body).to.have.property('edad').to.be.equal('50')
          expect(res).to.have.status(200)
          done()
        })
    })

    it('Se deberia eliminar un usuario: ', (done) => {
      chai.request(url)
        .del('/eliminar/'+idUser)
        .end( (err,res) =>{
          expect(res).to.have.status(200)
          done()
        })
    }) */
  })
})