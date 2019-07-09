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
            case userGame:

                let index1 = linha.indexOf('n\\');
                let index2 = linha.indexOf('\\t') - 1;
                let user = linha.trim().substr(index1, index2 - index1);
                user = user.replace(/\\/g, '');

                if (gamesArray[count - 1].game.players.length > 0) {
                    let index = gamesArray[count - 1].game.players.findIndex(item => user == item);
                    if (index == -1) {
                        gamesArray[count - 1].game.players.push(user);
                    }
                } else {
                    gamesArray[count - 1].game.players.push(user);
                }

                break;

        }
    });
    return gamesArray;
}

module.exports = parserRead;