CREATE TABLE game
(
  game_id bigint NOT NULL AUTO_INCREMENT,
  game_player1 bigint,
  game_player2 bigint,
  game_winner bigint,
  CONSTRAINT pk_game_history PRIMARY KEY (game_id)
);

CREATE TABLE game_players
(
  player_id bigint NOT NULL AUTO_INCREMENT,
  player_nickname varchar(200),
  player_pokemon1 bigint,
  player_pokemon2 bigint,
  player_pokemon3 bigint,
  player_pokemon4 bigint,
  player_pokemon5 bigint,
  player_pokemon6 bigint,
  player_first_pokemon bigint,
  CONSTRAINT pk_game_players PRIMARY KEY (player_id)
);

CREATE TABLE movements
(
  movement_id bigint NOT NULL,
  movement_name varchar(130),
  movement_accuracy bigint,
  movement_power bigint,
  movement_pp bigint,
  movement_type bigint,
  CONSTRAINT pk_movements PRIMARY KEY (movement_id)
);

CREATE TABLE player_attacks
(
  player_attack_id bigint NOT NULL AUTO_INCREMENT,
  player_attack_player_id bigint,
  player_attack_pokemon bigint,
  player_attack_movement bigint,
  player_attack_attacked_player_id bigint,
  player_attack_attacked_pokemon bigint,
  CONSTRAINT pk_game_history1 PRIMARY KEY (player_attack_id)
);

CREATE TABLE player_change
(
  player_change_id bigint NOT NULL AUTO_INCREMENT,
  player_change_player_id bigint,
  player_change_old_pokemon_id bigint,
  player_change_new_pokemon_id bigint,
  CONSTRAINT pk_player_change PRIMARY KEY (player_change_id)
);

CREATE TABLE player_turn
(
  player_turn_id bigint NOT NULL,
  player_turn_game_id bigint NOT NULL,
  player_turn_attack bigint,
  player_turn_change bigint,
  CONSTRAINT pk_player_turn PRIMARY KEY (player_turn_id, player_turn_game_id)
);

CREATE TABLE pokemon
(
  pokemon_id bigint NOT NULL,
  pokemon_name varchar(540),
  pokemon_stats_hp bigint,
  pokemon_stats_attack bigint,
  pokemon_stats_defense bigint,
  pokemon_stats_special_attack bigint,
  pokemon_stats_special_defense bigint,
  pokemon_stats_speed bigint,
  pokemon_sprites_front varchar(300),
  pokemon_sprites_back varchar(300),
  CONSTRAINT pokemon_id PRIMARY KEY (pokemon_id)
);

CREATE TABLE pokemon_movement
(
  pokemon_id bigint NOT NULL,
  movement_id bigint NOT NULL,
  CONSTRAINT pk_pokemon_movement PRIMARY KEY (pokemon_id, movement_id)
);

CREATE TABLE stats_relation
(
  stats_id bigint NOT NULL,
  stats_name varchar(30),
  CONSTRAINT pk_stats_relation PRIMARY KEY (stats_id)
);

CREATE TABLE type_table
(
  type_id bigint NOT NULL,
  type_name varchar(30),
  CONSTRAINT pk_type_table PRIMARY KEY (type_id)
);

ALTER TABLE game ADD CONSTRAINT fk_game_history_
  FOREIGN KEY (game_player1) REFERENCES game_players (player_id);

ALTER TABLE game ADD CONSTRAINT fk_game_history_2
  FOREIGN KEY (game_player2) REFERENCES game_players (player_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_
  FOREIGN KEY (player_pokemon1) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_2
  FOREIGN KEY (player_pokemon2) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_3
  FOREIGN KEY (player_pokemon3) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_4
  FOREIGN KEY (player_pokemon4) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_5
  FOREIGN KEY (player_pokemon5) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_6
  FOREIGN KEY (player_pokemon6) REFERENCES pokemon (pokemon_id);

ALTER TABLE game_players ADD CONSTRAINT fk_game_players_7
  FOREIGN KEY (player_first_pokemon) REFERENCES pokemon (pokemon_id);

ALTER TABLE movements ADD CONSTRAINT fk_movements_
  FOREIGN KEY (movement_type) REFERENCES type_table (type_id);

ALTER TABLE player_attacks ADD CONSTRAINT fk_player_attacks_
  FOREIGN KEY (player_attack_movement) REFERENCES movements (movement_id);

ALTER TABLE player_attacks ADD CONSTRAINT fk_player_attacks_2
  FOREIGN KEY (player_attack_pokemon) REFERENCES pokemon (pokemon_id);

ALTER TABLE player_attacks ADD CONSTRAINT fk_player_attacks_3
  FOREIGN KEY (player_attack_attacked_pokemon) REFERENCES pokemon (pokemon_id);

ALTER TABLE player_attacks ADD CONSTRAINT fk_player_attacks_4
  FOREIGN KEY (player_attack_player_id) REFERENCES game_players (player_id);

ALTER TABLE player_attacks ADD CONSTRAINT fk_player_attacks_5
  FOREIGN KEY (player_attack_attacked_player_id) REFERENCES game_players (player_id);

ALTER TABLE player_change ADD CONSTRAINT fk_player_change_
  FOREIGN KEY (player_change_player_id) REFERENCES game_players (player_id);

ALTER TABLE player_change ADD CONSTRAINT fk_player_change_2
  FOREIGN KEY (player_change_old_pokemon_id) REFERENCES pokemon (pokemon_id);

ALTER TABLE player_turn ADD CONSTRAINT fk_player_turn_
  FOREIGN KEY (player_turn_game_id) REFERENCES game (game_id);

ALTER TABLE player_turn ADD CONSTRAINT fk_player_turn_2
  FOREIGN KEY (player_turn_attack) REFERENCES player_attacks (player_attack_id);

ALTER TABLE player_turn ADD CONSTRAINT fk_player_turn_3
  FOREIGN KEY (player_turn_change) REFERENCES player_change (player_change_id);

ALTER TABLE pokemon_movement ADD CONSTRAINT fk_pokemon_movement_
  FOREIGN KEY (pokemon_id) REFERENCES pokemon (pokemon_id);

ALTER TABLE pokemon_movement ADD CONSTRAINT fk_pokemon_movement_2
  FOREIGN KEY (movement_id) REFERENCES movements (movement_id);