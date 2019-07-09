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
            case killText:
                gamesArray[count - 1].game.total_kills++;

                let tamanho = linha.length;
                let indexKilled = linha.indexOf('killed');
                let stringUserKill = linha.substr(0, indexKilled);
                let stringUserKilled = linha.substr(indexKilled + 6, tamanho);
                let world = linha.indexOf('<world>');
                let userKill = '';
                let userKilled = '';


                gamesArray[count - 1].game.players.filter(x => {
                    let index = stringUserKill.indexOf(x);
                    if (index != -1) {
                        userKill = x;
                    }
                    let index2 = stringUserKilled.indexOf(x);
                    if (index2 != -1) {
                        userKilled = x;
                    }
                });


                if (world == -1) {
                    if (gamesArray[count - 1].game.kills[userKill]) {
                        gamesArray[count - 1].game.kills[userKill]++;
                    } else {
                        gamesArray[count - 1].game.kills[userKill] = 1
                    }
                } else {
                    if (gamesArray[count - 1].game.kills[userKill]) {
                        gamesArray[count - 1].game.kills[userKill]--;
                    } else {
                        gamesArray[count - 1].game.kills[userKill] = -1
                    }
                }

                if (userKill === userKilled) {
                    if (gamesArray[count - 1].game.kills[userKill]) {
                        gamesArray[count - 1].game.kills[userKill]--;
                    }
                }

                if (gamesArray[count - 1].game.kills[userKill] <= 0) {
                    delete gamesArray[count - 1].game.kills[userKill];
                }
                break;

        }
    });
    return gamesArray;
}

module.exports = parserRead;