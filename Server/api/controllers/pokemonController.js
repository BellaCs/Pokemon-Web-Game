var pokemonFormatter = require("../getFormatter/pokemonFormatter.socket");

exports.read_a_pokemon = function(req, res){
    pokemonFormatter.getPokemonById(req.params.pokemonId, pokemon => {
        if(pokemon != undefined){
            res
                .setHeader({
                    "Access-Control-Allow-Origin" : "*"
                })
                .json(pokemon);
        }else{
            res.sendStatus(404);
        }
    return;
    });
    
    
};
