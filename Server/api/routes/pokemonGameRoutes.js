const pokemonController = require("../controllers/pokemonController");
const playerController = require("../controllers/playerController");
const gameController = require("../controllers/gameControler");

module.exports = function (app){
    

    app.route('/pokemonForClient/:pokemonId')
        .get(pokemonController.read_pokemon_for_client);

    app.route('/player')
        .post(playerController.create_player);

    app.route('/game')
        .post(gameController.create_game);

};