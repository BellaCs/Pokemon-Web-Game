var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket");

exports.get_six_pokemon = function(req, res){
    let pokemons;
    res.headers.add("Access-Control-Allow-Origin", "*");
    pokemons = pokemonFormatter.getPokemons;
    if(pokemons != undefined){
        res.json(pokemon);
    }else{
        res.send(404);
    }
    return;
};

exports.read_a_pokemon = function(req, res){
    let pokemon = pokemonFormatter.getPokemonById(req.params.pokemonId);
    //res.header.add("Access-Control-Allow-Origin", "*");
    if(pokemon != undefined){
        res.json(pokemon);
    }else{
        res.send(404);
    }
    return;
};