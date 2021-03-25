const game = require("../models/game.database");

exports.create_game = (req, res) => {
    console.log(req.body);
    let gameInfo = Buffer.from(JSON.stringify(req.body));
    if(gameInfo == null){res.sendStatus(400)}
    game.create(JSON.stringify(gameInfo), result =>{
        if (result != undefined) {
            let gameId = {
                "gameId" : result
            }
            res.end(gameId);
        } else {
            res.sendStatus(404);
        }
        return;
    });
};