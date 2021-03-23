
module.exports = function (app){
    var getPokemons = require("../controllers/pokemonController")

    app.route('/pokemons')
        .get(getPokemons.get_six_pokemon);

    app.route('/pokemon/:pokemonId')
        .get(getPokemons.read_a_pokemon);

};