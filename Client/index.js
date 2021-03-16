const socket = require("socket.io-client").io("ws://localhost:3000");


socket.connect("172.24.19.11:3000/pokeSocket");

socket.on('connect', function () {

    console.log("connected \n");
    pedirPokemon();

});

function pedirPokemons(){

    socket.emit("pedirPokemon", "userName",function(pokeJson){
        return pokeJson;
    });

}

socket.on('missatge', function (msg, callback) {
    console.log(msg);
    callback("este lo devuelve");
});

socket.on('disconnect', function () {
    console.log('disconnected');
});

