const pokemonController = require("../controllers/pokemonController");
const playerController = require("../controllers/playerController");

module.exports = function (app){
    

    app.route('/pokemonForClient/:pokemonId')
        .get(pokemonController.read_pokemon_for_client);

    app.route('/player')
        .post(playerController.create_player);

};