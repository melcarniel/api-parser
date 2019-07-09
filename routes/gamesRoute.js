const express = require('express');
const router = express.Router();
const fs = require('fs');
const Parser = require('../parser/parser');


//@route  GET /games
//@desc   Pegar relatório de todos os games
//@access Public
router.get('/', async (req, res) => {
    try {

        fs.readFile('./dados/games.log', (err, log) => {
            if (err) {
                console.log(err);
                res.status(500).send({ error: err });
            }
           
            let text = log.toString();
            let result = Parser(text);

            res.json(result);
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro de servidor!')
    }
});

module.exports = router;