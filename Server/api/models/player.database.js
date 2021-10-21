const mariadb = require('../config/db.js');

const Player = function (player) {
        this.player_id = player.player_id;
        this.player_nickname = player.player_nickname;
        this.player_pokemon1 = player.player_pokemon1;
        this.player_pokemon2 = player.player_pokemon2;
        this.player_pokemon3 = player.player_pokemon3;
        this.player_pokemon4 = player.player_pokemon4;
        this.player_pokemon5 = player.player_pokemon5;
        this.player_pokemon6 = player.player_pokemon6;
        this.player_first_pokemon = player.player_first_pokemon;
}

Player.findById = (PlayerID, result) => {
        mariadb.query("SELECT * FROM game_players WHERE player_id = " + PlayerID, (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }
                if (res.length) {
                        result(null, res[0]);
                        return;
                }
                // not found Customer with the id
                result({ kind: "not_found" }, null);
        });
};

Player.create = (user, result) => {
        mariadb.query("INSERT INTO game_players SET ? " + user, (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }
                if (res.length) {
                        console.log("found customer: ", res);
                        result(null, res.insertId);
                        return;
                }
        });
}

module.exports = Player;