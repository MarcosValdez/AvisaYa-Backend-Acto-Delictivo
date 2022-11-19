import chai from 'chai'
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect
const url = "http://localhost:8080/user";

describe('Testing user enpoint: ', function() {
    describe('Check addtest funtion', function(){
        it('se deberia insertar un usuario', (done) => {
            chai.request(url)
            .post('/registro')
            .send({ usuario: "user prueba v1",
                    edad: "24",
                    correo: "user_prueba_v1",
                    contrasenia: "user_prueba_v1",
                    fechaCreacion: "user_prueba_v1"
                })
            .end( (err,res) =>{
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
        });
    })
})