var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket"),
   exports;

exports.get_six_pokemon = function(req, res){
    let pokemons = pokemonFormatter.getPokemons;
    if(pokemons != undefined){
        res.json(pokemons);
    }else{
        res.send("error");
    }
    res.json();
    return;
};