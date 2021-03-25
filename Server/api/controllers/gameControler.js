const game = require("../models/game.database");

exports.create_game = (req, res) => {
    console.log(req.body);
    let gameInfo = req.body;
    if(gameInfo == null){res.sendStatus(400)}
    game.create(gameInfo.game_player1, result =>{
        if (result != undefined) {
            let gameId = {
                "gameId" : result
            }
            res.end(JSON.stringify(gameId));
        } else {
            res.sendStatus(404);
        }
        return;
    });
};