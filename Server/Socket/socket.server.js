const Express = require("express");
const httpServer = require("http").Server(Express);
const io=require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
});
var partidaApi = {
    "partida_id": null,
    "jugador_1": null,
    "jugador_1_pokemons": [], 
    "jugador_2": null,
    "jugador_2_pokemons": []
}; 

var daño = 43;
var cambio = {
    "jugador_id": "1",
    "pokemon_cambiante_id": "2",
    "pokemon_nuevo" : "4"
};

var partidas = [];
var partida = null;
var partidasCreadas = 0;
io.on("connection", socket =>  {
    console.log("jugador conectado \n");
    socket.on("buscaPartida", function(msg, callback){
       if (partida == null) {
               partida = partidaApi;
               partida.jugador_1 = msg.jugador_id;
               partida.jugador_1_pokemons = msg.jugador_pokemons;
               callback(partida.partida_id);
               console.log("Primer jugador connectat");
       } else {
               callback(partida.partida_id);
               partida.jugador_2 = msg.jugador_id;
               partida.jugador_2_pokemons = msg.jugador_pokemons;
               partidas.push(partida);
               socket.emit("partidaTrobada" + partida.partida_id); 
               console.log(partida);
               partida = null; 
               console.log("Segon jugador connectat");
        }
    });

    socket.on("ataque", function(msg, callback){
        //Generar atacar(msg) en api
        msg.daño_final = daño;
        socket.emit("atacado" + msg.partida_id, msg, function(){});
    });

    socket.on("cambiar", function(msg, callback){
        //Generar cambiar() en api
        msg.cambio = cambio;
        socket.emit("cambiado" + msg.partida_id, msg, function(){});
    });

    socket.on("derrota", function(msg, callback){
        //Enviar partida a DB
        partidas[msg.partida_id] = null;
        socket.emit("FIN" + msg.partida_id, msg.ganador, function(){});
    });


    socket.on('disconnect', function(msg){
        partidas.forEach(element => {
            if  (msg.jugador_id == element.jugador_1 || msg.jugador_id == element.jugador_2){
                socket.emit("FIN" + msg.partida_id, "cualquiera", function(){});
            }
        });
    });
});

io.on("disconnect", socket => {
    console.log(socket.id);
});



httpServer.listen(3500, () => {});



