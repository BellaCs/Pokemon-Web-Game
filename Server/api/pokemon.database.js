const mariadb = require('./db/db.js');
const Pokemon = function(pokemon){
        
}

var getMovementFromDB = (movementID) => new Promise(resolve =>{
        let query2 = "SELECT * FROM movements WHERE movement_id = " + movementID
                conn.query(query2, function(error, results){
                        resolve(results)
                })        
})

var getPokemonFromDB = (PokemonID) => new Promise(resolve =>{
        var query1 = "SELECT * FROM pokemon WHERE pokemon_id = " + PokemonID
        var response
        conn.query(query1, function(error, results) {
            response = JSON.stringify(results)
	});
        let movements = getMovements(PokemonID)
        movements.then((success)=>{
                if(response != undefined)response.movements = success
        })
        resolve(response)
})

var getPosibleMovementsFromDB = (PokemonID) => new Promise(resolve =>{
        let query2 = "SELECT movement_id FROM pokemon_movement WHERE pokemon_id = " + PokemonID
        let response = [0]      
        let result = [0]
        conn.query(query2, function(error, results) {
                if(results!=undefined)result = results;
                result.forEach(element=>{
                        response.push(element.movement_id)
                })
        	resolve(response)	
	});
})

var getMovementsFromDB = (pokemonID) => new Promise(resolve =>{
        let response = []
        let movements = getPosibleMovements(pokemonID)
        let index = 0
        let movement
        console.log(3)
        movements.then((success)=>{
                console.log(2)
                success.forEach(element => {
                        console.log(1)
	                if (index < 5) {
                                movement = getMovement(element)
                                movement.then((success)=>{
                                        response.push(JSON.stringify(success))
                                })
                                index++
            	        }
       	        })    
                resolve(response)
        })
        
        
})

async function getMovements(PokemonID){
        return await getMovementsFromDB(PokemonID)
}

async function getPosibleMovements(PokemonID){
        return await getPosibleMovementsFromDB(PokemonID)
}

async function getPokemon(PokemonID){
        return await getPokemonFromDB(PokemonID)
}

async function getMovement(movementID){
        return await getMovementFromDB(movementID)
}

async function getPokemons(){
        return await getPokemonsPromise()
}

var getPokemonsPromise = () => new Promise(resolve => {
    var pokemons = []
    for (let index = 0; index < 6; index++) {
            
        let pokemon = getPokemon(Math.floor(Math.random() * 151))
        pokemon.then((success) => {
                pokemons.push(success)
               
        })       
    }
    resolve(pokemons)
    
})



module.exports = getPokemons()