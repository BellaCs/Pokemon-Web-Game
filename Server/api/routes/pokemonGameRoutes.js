
module.exports = function (app){
    var getPokemons = require("../controllers/pokemonController")

    app.route('/pokemonForClient/:pokemonId')
        .get(getPokemons.pokemon_for_client);

};