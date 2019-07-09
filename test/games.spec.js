const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;
let id = 0;
let id2 = -1;

describe('Rota Games', () => {

    it('Exibir relatório de todos os games', () => 
    {
      return chai.request(app).get('/games')
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          
        });
    });
    
    it('Pegar relatório por id do game', () => 
    {
      return chai.request(app).get(`/games/${id}`)
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res).to.be.json;
          
        });
    });

    it('Pegar relatório por id do game que não existe', () => 
    {
      return chai.request(app).get(`/games/${id2}`)
        .then(res => {
          expect(res.status).to.equal(200);
          expect('Content-Type', /json/);
          
        });
    });
});
