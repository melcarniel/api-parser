function parserRead(log) {

    let count = 0;
    let gamesArray = [];
    let linhas = log.split('\n');

    linhas.forEach(linha => {
        let linhasArray = linha.trim().split(' ');
        let initGame = 'InitGame:';
        let userGame = 'ClientUserinfoChanged:';
        let killText = 'Kill:';

        switch (linhasArray[1]) {
            case initGame:
                count++;
                gamesArray.push({
                    game: {
                        total_kills: 0,
                        players: [],
                        kills: {}
                    }
                });

                break;

        }
    });
    return gamesArray;
}

module.exports = parserRead;