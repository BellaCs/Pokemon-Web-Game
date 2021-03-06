const player = require("../models/player.database");

exports.create_player = function(req, res){
    console.log(req.body);
    let playerInfo = Buffer.from(JSON.stringify(req.body));
    if(playerInfo == null){res.sendStatus(400)}
    player.create(playerInfo, result =>{
        if (result != undefined) {
            let playerId = {
                "playerId" : result
            }
            res(playerId);
        } else {
            res.sendStatus(404);
        }
        return;
    });
}