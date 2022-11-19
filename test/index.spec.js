import app from '../index.js'
import chai from 'chai'
import request from 'request'

const assert = chai.assert
const expect = chai.expect
const should = chai.should()

const url = "http://localhost:8080";
describe('Testing assert function: ', function() {
    describe('Check addtest funtion', function(){
        it("metodo prueba 2 GET User", async() => {
            let entpoint = url+"/user/prueba"
            request(entpoint, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        })

        it("metodo prueba 2 GET Crime", async() => {
            let entpoint = url+"/crime/prueba"
            request(entpoint, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
            });
        })

    })
})