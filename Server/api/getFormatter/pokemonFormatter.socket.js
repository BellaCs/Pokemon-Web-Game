const pokemonDB = require("../models/pokemon.database");

exports.getPokemonById = (pokemonId, res) => {
    console.log(pokemonId);
    var pokemon;

        pokemonDB.findById(pokemonId,(error, result) =>{
            if(error == null){
                pokemon = result;

                console.log("Pokemon: " + result);
                res(pokemon);
            }else{
                console.log(error);
                res(null);
            }
        });           
               
    
    
}