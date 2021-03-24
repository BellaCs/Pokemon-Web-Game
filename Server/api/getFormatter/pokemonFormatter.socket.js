const pokemonDB = require("../models/pokemon.database");

exports.getPokemons = () => {
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
    return pokemons;
}

exports.getPokemonById = (pokemonId, res) => {
    var pokemon;

        pokemonDB.findById(pokemonId,(error, result) =>{
            if(error == null){
                pokemon = JSON.stringify(result);

                console.log("Pokemon: " + result);
                res(pokemon);
            }else{
                console.log(error);
                res(null);
            }
        });           
               
    
    
}