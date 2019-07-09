const express = require('express');
const router = express.Router();
const fs = require('fs');



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
           
            res.json(log.toString());
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro de servidor!')
    }
});

module.exports = router;