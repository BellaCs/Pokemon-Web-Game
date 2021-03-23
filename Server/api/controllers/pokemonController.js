var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket");

exports.get_six_pokemon = function(req, res){
    let pokemons;
    res.headers.add("Access-Control-Allow-Origin", "*");
    pokemonFormatter.getPokemons(response => {
        pokemons = response;
    });
    if(pokemons != undefined){
        
        res.json(pokemons);
    }else{
        
        res.send("error");
    }
    return;
};

exports.read_a_pokemon = function(req, res){
    let pokemon = pokemonFormatter.getPokemonById(req.params.pokemonId);
    res.headers.add("Access-Control-Allow-Origin", "*");
    if(pokemon != undefined){
        res.json(pokemon);
    }else{
        res.send(404);
    }
    return;
};