const chai = require('chai');
const expect = chai.expect;
const Parser = require('../parser/parser');
const fs = require('fs');




describe('Parser', () => {
    it('A função do parser deve retornar um array de objetos', (done) => {

        fs.readFile('./dados/games.log', (err, data) => {
            if (err) {
                console.log(err)
                throw err;
            }
            let text = data.toString();
            let result = Parser(text);


            expect(result).to.be.a('array');
            done();


        });
    });

    it('total_kills dentro do objeto deve retornar um número', (done) => {

        fs.readFile('./dados/games.log', (err, data) => {
            if (err) {
                console.log(err)
                throw err;
            }
            let text = data.toString();
            let result = Parser(text);


            expect( ( result[0].game.total_kills ) ).to.be.a('number');
            done();


        });
    });

    it('players dentro do objeto deve retornar um array de jogadores', (done) => {

        fs.readFile('./dados/games.log', (err, data) => {
            if (err) {
                console.log(err)
                throw err;
            }
            let text = data.toString();
            let result = Parser(text);


            expect( ( result[3].game.players ) ).to.be.a('array');
            done();


        });
    });

    it('kills dentro do objeto deve retornar um objeto com os jogadores que pontuaram ou vazio', (done) => {

        fs.readFile('./dados/games.log', (err, data) => {
            if (err) {
                console.log(err)
                throw err;
            }
            let text = data.toString();
            let result = Parser(text);


            expect( ( result[6].game.kills ) ).to.be.a('object');
            done();


        });
    });
})

