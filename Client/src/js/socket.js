import "../../node_modules/socket.io-client/dist/socket.io";
import { pokemons } from "./inici.js";

const socket = io("ws://172.24.19.11:3500");

var partidaId,userId;

export function connectToSocket(){
    socket.connect();
}


socket.on('connect', function () {

    socket.on("attackEvent" + partida, (data) => {});

    socket.on("fiPartida" + partida, (data) => {});

    socket.on('disconnect', () => {});

});

export var buscarPartida = (user, result) =>  {
   
    socket.emit("buscaPartida", user, function(partida_id, playerId) {
        console.log(partida_id);
        partidaId = partida_id;
        userId = playerId;
        result("Cercant partida...")
    });

}



    
socket.emit("attackEvent", ataque, function(daño_final, si){
    console.log(daño_final);
});



