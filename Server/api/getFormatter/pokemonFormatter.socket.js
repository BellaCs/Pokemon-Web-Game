const pokemonDB = require("../db/models/pokemon.database");

function getPokemons(){
    var pokemons = []
    for (let index = 0; index < 6; index++) {
            
        let pokemon = pokemonDB.findById(Math.floor(Math.random() * 151));
        
        pokemons.push(JSON.stringify(pokemon));

        console.log(pokemon);
               
               
    }
    return pokemons;
    
}

module.exports = getPokemons()