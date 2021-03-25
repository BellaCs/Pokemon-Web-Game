var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket");

exports.pokemon_for_client = function(req, res){
    pokemonFormatter.getPokemonByIdToClient(req.params.pokemonId, pokemon => {
        if(pokemon != undefined){
            res.setHeader("Access-Control-Allow-Origin" , "*");
            res.json(pokemon);
        }else{
            res.sendStatus(404);
        }
    return;
    });
    
    
};
