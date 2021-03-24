var io = require("socket.io-client");

const socket = io("ws://localhost:3500");
var jugador = {
    "jugador_id": "1",
    "jugador_pokemons": [
        {
            "pokemon_1": "1",
            "pokemon_2": "2",
            "pokemon_3": "3",
            "pokemon_4": "4",
            "pokemon_5": "5",
            "pokemon_6": "6"
        }
    ]
}; 

var ataque = {
    "partida_id": "1",
    "jugador_id": "1",
    "pokemon_id": "2",
    "habilidad_id": "27",
    "objectivo_id": "4",
    "daño_final": "0",
};
var partida;
socket.connect();

socket.on('connect', function () {

    socket.emit("buscaPartida", jugador, function(partida_id, si) {
        console.log(partida_id);
        partida = partida_id
    });

    socket.emit("ataque", ataque, function(daño_final, si){
        console.log(daño_final);
    });

    socket.on("atacado" + partida, function(msg){
        console.log(msg);
    });

    /*socket.emit("pedirPokemon", "userName", function(pokeJson, si){
        resolve(pokeJson)
    });*/

});

var pedirPokemons = (userName)  => new Promise(resolve =>{
    

})

socket.on('disconnect', function () {
    console.log('disconnected');
});

