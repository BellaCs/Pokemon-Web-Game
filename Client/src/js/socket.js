import "./node_modules/socket.io-client/dist/socket.io";
import { pokemons } from "./inici.js";

const socket = io("ws://172.24.19.11:3500");
var jugador =  {
    "nickname": null,
    "jugador_pokemons": []
}; 
var ataque = {
    "partida_id": null,
    "jugador_id": null,
    "pokemon_id": null,
    "habilidad_id": null,
    "objectivo_id": null,
    "daño_final": null,
};

export function connectToSocket(){
    socket.connect();
}


socket.on('connect', function () {

    socket.on("attackEvent" + partida, function(msg){});

    socket.on("fiPartida" + partida, function(msg){});

    socket.on('disconnect', function () {});

});

export var buscarPartida = () =>  {

}
socket.emit("buscaPartida", jugador, function(partida_id, si) {
        console.log(partida_id);
        partida = partida_id
});

    
socket.emit("attackEvent", ataque, function(daño_final, si){
    console.log(daño_final);
});



