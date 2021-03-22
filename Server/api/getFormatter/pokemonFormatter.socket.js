const pokemonDB = require("../db/models/pokemon.database");

function getPokemons(){
    var pokemons = []
    for (let index = 0; index < 6; index++) {
            
        pokemonDB.findById(Math.floor(Math.random() * 151),(error, result) =>{
            if(error!= null){
                pokemons.push(JSON.stringify(result));

                console.log("Pokemon: " + result);
            }else{
                console.log(error);
            }
        });           
               
    }
    return pokemons;
    
}

module.exports = getPokemons()