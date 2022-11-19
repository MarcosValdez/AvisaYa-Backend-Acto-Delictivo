import chai from 'chai'
import chaiHttp from 'chai-http';

chai.use(chaiHttp);
const expect = chai.expect
const url = "http://localhost:8080/crime";

let idUser = '';