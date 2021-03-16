const Express = require("express");
const { disconnect } = require("process");
const httpServer = require("http").Server(Express)
const io=require("socket.io")(httpServer, {
    cors: { origin: "*", methods: ["GET","POST"] }
});

io.on("connection", socket =>  {
     console.log("jugador conectado");    

     socket.on("pedirPokemon", function(msg, callback){
         let data = {
            "pokemon_id": 38, 
            "pokemon_name": "ninetales", 
            "pokemon_stats_hp": 73, 
            "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png", 
            "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png%22%7D",
            "movements" : [
                {
                    "movement_id": 29, 
                    "movement_name": "headbutt", 
                    "movement_pp": 15
                }, {
                    "movement_id": 34, 
                    "movement_name": "body-slam",
                    "movement_pp": 15
                }, {
                    "movement_id": 36, 
                    "movement_name": "take-down", 
                    "movement_pp": 20 
                }, {
                    "movement_id": 38, 
                    "movement_name": "double-edge",
                    "movement_pp": 15
                }]
            }
         callback();
     });
});

io.on("disconnect", socket => {
    console.log(socket.id);
});



httpServer.listen(3000, () => {});
