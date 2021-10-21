const mariadb = require('../config/db.js');

const Pokemon = function (pokemon) {
        this.pokemon_id = pokemon.pokemon_id;
        this.pokemon_name = pokemon.pokemon_name;
        this.pokemon_stats_hp = pokemon.pokemon_stats_hp;
        this.pokemon_stats_attack = pokemon.pokemon_stats_attack;
        this.pokemon_stats_defense = pokemon.pokemon_stats_defense;
        this.pokemon_stats_speed = pokemon.pokemon_stats_speed;
        this.pokemon_sprites_front = pokemon.pokemon_sprites_front;
        this.pokemon_sprites_back = pokemon.pokemon_sprites_back;
        return this;
}

Pokemon.findById = (PokemonID, result) => {
        mariadb.query("SELECT * FROM pokemon WHERE pokemon_id = " + PokemonID, (err, res) => {
                if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                }

                if (res.length) {
                        result(null, res[0]);
                        return;
                }

                
                result({ kind: "not_found" }, null);
        });
};

module.exports = Pokemon;