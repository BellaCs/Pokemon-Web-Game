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
    "jugador_1_first_pokemon" : null,
    "jugador_2": null,
    "jugador_2_first_pokemon" : null
};

var cambio = {
    "jugador_id": null,
    "pokemon_cambiante_id": null,
    "pokemon_nuevo": null
};

var partidas = [];
var partidaEnEspera = null;

io.on("connection", socket => {

    let userId;
    let partidaId;

    console.log("jugador conectado \n");

    socket.on("buscaPartida", function (user, callback) {
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
                dataUser = JSON.parse(data);
                userId = dataUser.playerId;
                if (partidaEnEspera == null) {
                    request.post({
                        url: "http://localhost:3000/game",
                        json: true,
                        headers: { 'User-Agent': 'request' },
                        body: { "game_player1": data.playerId }
                    }, (err, res, data) => {
                        if (err) {
                            console.log(err);
                        } else if (res.statusCode != 200) {
                            console.log(res.statusCode);
                        } else {
                            gameData = JSON.parse(data);
                            partidaId = gameData.gameId;
                            setPartidaEnEsperaParameters(1, partidaId, userId, user);
                            
                            callback(partidaId ,userId);
                            console.log("Primer jugador connectat");
                        }
                    });

                } else {
                    partidaId = partidaEnEspera.partida_id;
                    setPartidaEnEsperaParameters(2, null, dataUser);
                    
                    callback(partidaId, userId);
                    
                    console.log("Segon jugador connectat");

                    initGame();
                    
                    
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

function setPartidaEnEsperaParameters(playerNumber, partidaId, userId, user) {
    if (playerNumber == 1) {
        partidaEnEspera = partidaApi;
        partidaEnEspera.partida_id = partidaId;
        partidaEnEspera.jugador_1 = userId;
        partidaEnEspera.jugador_1_first_pokemon = user.player_first_pokemon;
    } else if (playerNumber == 2) {
        partidaEnEspera.jugador_2 = userId;
        partidaEnEspera.jugador_2_first_pokemon = user.player_first_pokemon;
    }
}

function initGame(){
    socket.emit("partidaTrobada:" + partidaEnEspera.partida_id, partidaEnEspera);
    partidas.push(partidaEnEspera);
    console.log(partida);
    partidaEnEspera = null;
    console.log("Partida iniciada");
}

httpServer.listen(3500, () => { });



