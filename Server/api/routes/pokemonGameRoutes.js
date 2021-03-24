
module.exports = function (app){
    var getPokemons = require("../controllers/pokemonController")

    app.route('/pokemon/:pokemonId')
        .get(getPokemons.read_a_pokemon);

};