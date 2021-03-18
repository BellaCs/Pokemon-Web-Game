
var mysql = require('mysql');
var conn;

function createConnection(){
        conn = mysql.createConnection({
                host: "localhost",    // ip address of server running mysql
                user: "root",    // user name to your mysql database
                password: "",   // corresponding password
                database: "pokeDB"
        });
}


async function getPokemon(PokemonID){
        var query1 = "SELECT * FROM pokemon WHERE pokemon_id = " + PokemonID;
        var query2 = "SELECT movement_id FROM pokemon_movement WHERE pokemon_id = " + PokemonID;
        var response, response2= [0], response3, response4 = [];
        var index = 0;
        conn.query(query1, function(error, results) {
            response = JSON.stringify(results);
	});
        conn.query(query2, function(error, results) {
		for (let i = 0; i < results.length; i++){
		   response2.push(results[i].movement_id);	
		}
		response2.forEach(element => {
	            if (index < 5) {
                    		await response4.push(JSON.stringify(getMovement(element))); 
            	    }
       		 });
        	return response4;	
	});
}

function getMovement(movementID){
  let query2 = "SELECT * FROM movements WHERE movement_id = " + movementID;
       conn.query(query2, function(error, results){
               return results;
       });
}

function getPokemons(){
    var pokemons = [];
    for (let i = 0; i < 6; i++) {
        pokemons.push( getPokemon(Math.floor(Math.random() * 151)));
    }
    return pokemons;
}
createConnection();
console.log(getPokemon(5));

