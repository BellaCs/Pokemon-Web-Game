const request = require("requests");
const Express = require("express");
const httpServer = require("http").Server(Express);
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
var partidaApi = {
    "partida_id": null,
    "jugador_1": null,
    "jugador_1_pokemons": [],
    "jugador_2": null,
    "jugador_2_pokemons": []
};

var cambio = {
    "jugador_id": null,
    "pokemon_cambiante_id": null,
    "pokemon_nuevo": null
};

var partidas = [];
var partidaEnEspera = null;

io.on("connection", socket => {
    console.log("jugador conectado \n");
    socket.on("buscaPartida", function (user, callback) {
        let pokemons = [user.player_pokemon1,
        user.player_pokemon2,
        user.player_pokemon3,
        user.player_pokemon4,
        user.player_pokemon5,
        user.player_pokemon6
        ]
        request.post({
            url: "http://localhost:3000/player",
            json: true,
            headers: { 'User-Agent': 'request' },
            body: user
        }, (err, res, data) => {
            if (err) {
                console.log(err);
            } else if (res.statusCode != 200) {
                console.log(res.statusCode);
            } else {
                if (partidaEnEspera == null) {
                    partidaEnEspera = partidaApi;
                    partidaEnEspera.jugador_1 = data.playerId;
                    partidaEnEspera.jugador_1_pokemons = pokemons;
                    callback(partidaEnEspera.partida_id, data.playerId);
                    console.log("Primer jugador connectat");
                } else {
                    partidaEnEspera.jugador_2 = data.playerId;
                    partidaEnEspera.jugador_2_pokemons = pokemons;
                    partidaEnEspera.push(partidaEnEspera);
                    callback(partidaEnEspera.partida_id, data.playerId);
                    socket.emit("partidaTrobada" + partidaEnEspera.partida_id, partidaEnEspera);
                    console.log(partida);
                    partidaEnEspera = null;
                    console.log("Segon jugador connectat");
                }
            }
        });


    });

    socket.on("ataque", function (msg, callback) {
        //Generar atacar(msg) en api
        msg.daño_final = daño;
        socket.emit("atacado" + msg.partida_id, msg, function () { });
    });

    socket.on("cambiar", function (msg, callback) {
        //Generar cambiar() en api
        msg.cambio = cambio;
        socket.emit("cambiado" + msg.partida_id, msg, function () { });
    });

    socket.on("derrota", function (msg, callback) {
        //Enviar partida a DB
        partidas[msg.partida_id] = null;
        socket.emit("FIN" + msg.partida_id, msg.ganador, function () { });
    });


    socket.on('disconnect', function (msg) {
        partidas.forEach(element => {
            if (msg.jugador_id == element.jugador_1 || msg.jugador_id == element.jugador_2) {
                socket.emit("FIN" + msg.partida_id, "cualquiera", function () { });
            }
        });
    });
});

io.on("disconnect", socket => {
    console.log(socket.id);
});



httpServer.listen(3500, () => { });



