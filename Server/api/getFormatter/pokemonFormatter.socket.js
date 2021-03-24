const pokemonDB = require("../models/pokemon.database");

exports.getPokemons = () => {
    var pokemons = []
    for (let index = 0; index < 6; index++) {
            
        pokemonDB.findById(Math.floor(Math.random() * 151),(error, result) =>{
            if(error == null){
                console.log("Pokemon: " + result.pokemon_name);

            }else{
                console.log(error);
            }
        });           
               
    }
    return;
}

exports.getPokemonById = (pokemonId) => {
    var pokemon;

        pokemonDB.findById(pokemonId,(error, result) =>{
            if(error == null){
                pokemon  = JSON.stringify(result);

                console.log("Pokemon: " + result);
                return pokemon;
            }else{
                console.log(error);
                return null;
            }
        });           
               
    
    
}