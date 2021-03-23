const pokemonDB = require("../models/pokemon.database");

exports.getPokemons = (response) => {
    var pokemons = []
    for (let index = 0; index < 6; index++) {
            
        pokemonDB.findById(Math.floor(Math.random() * 151),(error, result) =>{
            if(error == null){
                pokemons.push(JSON.stringify(result));

                console.log("Pokemon: " + result);
            }else{
                console.log(error);
            }
        });           
               
    }
    response(resposta);
    return;
}

exports.getPokemonById = (pokemonId) => {
    var pokemon;

        pokemonDB.findById(pokemonId,(error, result) =>{
            if(error == null){
                pokemons.push(JSON.stringify(result));

                console.log("Pokemon: " + result);
            }else{
                console.log(error);
            }
        });           
               
    return pokemons;
    
}