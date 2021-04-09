const mariadb = require('../config/db.js');

const Game = function (game) {
        this.game_id = game.game_id;
        this.game_player1 = game.game_player1;
        this.game_player2 = game.game_player2;
        this.game_winner = game.game_winner;
}

Game.findById = (GameID, result) => {
        mariadb.query("SELECT * FROM game WHERE game_id = " + GameID , (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }

                if (res.length) {
                        console.log("found customer: ", res[0]);
                        result(null, res[0]);
                        return;
                }

                // not found Customer with the id
                result({ kind: "not_found" }, null);
        });
};

Game.create = (data, result) =>
        mariadb.query("INSERT INTO game (game_player1) ?" + data.game_player1, (err, res) => {
                if (err) {
                        result(err, null);
                        return;
                }

                if (res.length) {
                        result(null, res.insertId);
                        return;
                }
        });

module.exports = Game;