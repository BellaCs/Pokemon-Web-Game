const Express = require("express");
const { disconnect } = require("process");
const httpServer = require("http").Server(Express)
const io=require("socket.io")(httpServer, {
    cors: { origin: "*", methods: ["GET","POST"] }
});

io.on("connection", socket =>  {
     console.log("jugador conectado");    

     socket.on("pedirPokemon", function(msg, callback){
         console.log("peticion de pokemons")
        
         callback(data);
     });
});

io.on("disconnect", socket => {
    console.log(socket.id);
});



httpServer.listen(3000, () => {});


var data = [{
    "pokemon_id": 38,
    "pokemon_name": "ninetales",
    "pokemon_stats_hp": 73,
    "pokemon_stats_attack": 76,
    "pokemon_stats_defense": 75,
    "pokemon_stats_special_attack": 81,
    "pokemon_stats_special_defense": 100,
    "pokemon_stats_speed": 100,
    "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/38.png",
    "atacs":
        [
            {
                "movement_id": 29,
                "movement_name": "headbutt",
                "movement_accuracy": 100,
                "movement_power": 70,
                "movement_pp": 15,
                "movement_type": 1
            },
            { "movement_id": 34, "movement_name": "body-slam", "movement_accuracy": 100, "movement_power": 85, "movement_pp": 15, "movement_type": 1 },
            { "movement_id": 36, "movement_name": "take-down", "movement_accuracy": 85, "movement_power": 90, "movement_pp": 20, "movement_type": 1 },
            { "movement_id": 38, "movement_name": "double-edge", "movement_accuracy": 100, "movement_power": 120, "movement_pp": 15, "movement_type": 1 }
        ]


}, {
    "pokemon_id": 58,
    "pokemon_name": "growlithe",
    "pokemon_stats_hp": 55,
    "pokemon_stats_attack": 70,
    "pokemon_stats_defense": 45,
    "pokemon_stats_special_attack": 70,
    "pokemon_stats_special_defense": 50,
    "pokemon_stats_speed": 60,
    "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/58.png",
    "atacs":
        [
            {
                "movement_id": 24,
                "movement_name": "double-kick",
                "movement_accuracy": 100,
                "movement_power": 30,
                "movement_pp": 30,
                "movement_type": 2
            },
            {
                "movement_id": 29,
                "movement_name": "headbutt",
                "movement_accuracy": 100,
                "movement_power": 70,
                "movement_pp": 15,
                "movement_type": 1
            },
            {
                "movement_id": 34,
                "movement_name": "body-slam",
                "movement_accuracy": 100,
                "movement_power": 85,
                "movement_pp": 15,
                "movement_type": 1
            },
            {
                "movement_id": 36,
                "movement_name": "take-down",
                "movement_accuracy": 85,
                "movement_power": 90,
                "movement_pp": 20,
                "movement_type": 1
            }
        ]
}, {
    "pokemon_id": 35,
    "pokemon_name": "clefairy",
    "pokemon_stats_hp": 70,
    "pokemon_stats_attack": 45,
    "pokemon_stats_defense": 48,
    "pokemon_stats_special_attack": 60,
    "pokemon_stats_special_defense": 65,
    "pokemon_stats_speed": 35,
    "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
    "atacs":
        [
            {
                "movement_id": 1,
                "movement_name": "pound",
                "movement_accuracy": 100,
                "movement_power": 40,
                "movement_pp": 35,
                "movement_type": 1
            },
            {
                "movement_id": 3,
                "movement_name": "double-slap",
                "movement_accuracy": 85,
                "movement_power": 15,
                "movement_pp": 10,
                "movement_type": 1
            },
            {
                "movement_id": 5,
                "movement_name": "mega-punch",
                "movement_accuracy": 85,
                "movement_power": 80,
                "movement_pp": 20,
                "movement_type": 1
            },
            {
                "movement_id": 7,
                "movement_name": "fire-punch",
                "movement_accuracy": 100,
                "movement_power": 75,
                "movement_pp": 15,
                "movement_type": 10
            }
        ]
}, {
    "pokemon_id": 151,
    "pokemon_name": "mew",
    "pokemon_stats_hp": 100,
    "pokemon_stats_attack": 100,
    "pokemon_stats_defense": 100,
    "pokemon_stats_special_attack": 100,
    "pokemon_stats_special_defense": 100,
    "pokemon_stats_speed": 100,
    "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/151.png",
    "atacs":
        [
            {
                "movement_id": 1,
                "movement_name": "pound",
                "movement_accuracy": 100,
                "movement_power": 40,
                "movement_pp": 35,
                "movement_type": 1
            },
            {
                "movement_id": 5,
                "movement_name": "mega-punch",
                "movement_accuracy": 85,
                "movement_power": 80,
                "movement_pp": 20,
                "movement_type": 1
            },
            {
                "movement_id": 6, "movement_name": "pay-day", "movement_accuracy": 100, "movement_power": 40, "movement_pp": 20, "movement_type": 1
            },
            { "movement_id": 7, "movement_name": "fire-punch", "movement_accuracy": 100, "movement_power": 75, "movement_pp": 15, "movement_type": 10 }
        ]
},
{
    "pokemon_id": 18,
    "pokemon_name": "pidgeot",
    "pokemon_stats_hp": 83,
    "pokemon_stats_attack": 80,
    "pokemon_stats_defense": 75,
    "pokemon_stats_special_attack": 70,
    "pokemon_stats_special_defense": 70,
    "pokemon_stats_speed": 101,
    "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
    "atacs":
        [
            { "movement_id": 13, "movement_name": "razor-wind", "movement_accuracy": 100, "movement_power": 80, "movement_pp": 10, "movement_type": 1 }, { "movement_id": 16, "movement_name": "gust", "movement_accuracy": 100, "movement_power": 40, "movement_pp": 35, "movement_type": 3 }, { "movement_id": 17, "movement_name": "wing-attack", "movement_accuracy": 100, "movement_power": 60, "movement_pp": 35, "movement_type": 3 }, { "movement_id": 18, "movement_name": "whirlwind", "movement_accuracy": null, "movement_power": null, "movement_pp": 20, "movement_type": 1 }

        ]

},
{
    "pokemon_id": 103, "pokemon_name": "exeggutor", "pokemon_stats_hp": 95, "pokemon_stats_attack": 95, "pokemon_stats_defense": 85, "pokemon_stats_special_attack": 125, "pokemon_stats_special_defense": 75, "pokemon_stats_speed": 55, "pokemon_sprites_front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png", "pokemon_sprites_back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/103.png",
    "atacs":
        [
            {"movement_id": 14, "movement_name": "swords-dance", "movement_accuracy": null, "movement_power": null, "movement_pp": 20, "movement_type": 1}, { "movement_id": 23, "movement_name": "stomp", "movement_accuracy": 100, "movement_power": 65, "movement_pp": 20, "movement_type": 1 }, { "movement_id": 29, "movement_name": "headbutt", "movement_accuracy": 100, "movement_power": 70, "movement_pp": 15, "movement_type": 1 }, { "movement_id": 36, "movement_name": "take-down", "movement_accuracy": 85, "movement_power": 90, "movement_pp": 20, "movement_type": 1 }
        ]
    }
]