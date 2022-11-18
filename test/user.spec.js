import chai from 'chai'
import request from 'request'

const assert = chai.assert
const expect = chai.expect
const should = chai.should()

const url = "http://localhost:8080";
describe('Testing user enpoint: ', function() {
    describe('Check addtest funtion', function(){
        it("metodo prueba user 2 GET", async() => {
            let entpoint = url+"/user/prueba"
            request(entpoint, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
              });
        })
    })
})