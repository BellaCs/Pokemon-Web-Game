//import { pokemons } from "./inici.js";
//import * as socket from "./socket.js";



var pokeballs, user,
    pokemonImg1, pokemonImg2, pokemonImg3, pokemonImg4, pokemonImg5, pokemonImg6,
    pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6, firstPokemon,
    pokemonMapaImg, pokemonMapaName, mapDisplay, selectedPokemonImg,
    DOMhabilitat1, DOMhabilitat2, DOMhabilitat3, DOMhabilitat4,
    habilitat1, habilitat2, habilitat3, habilitat4,
    jugar_btn, jugarDiv, ProgressBar1, ProgressBar2,
    selectedPokemonId, playing = false;

window.onload = function () {
    getUserFromLocal();
    getDOMElements();
    setEventListeners();
    //loadPokemonToVar();
    //mostrarPokemons();
}

function getUserFromLocal() {
    user = localStorage.getItem("user");
}

function setEventListeners() {
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", changeEvent)
    }
    jugar_btn.addEventListener("click", buscarPartida);
}

function getDOMElements() {
    pokemonMapaImg = document.getElementById('pokemon1');
    pokeballs = document.getElementsByClassName("selectPokeballs");
    jugar_btn = document.getElementById("jugar");
    jugarDiv = document.getElementById("divJugar");
    pokemonMapaName = document.getElementById('pokemon-1-name');
    ProgressBar1 = document.getElementById("health1");
    ProgressBar2 = document.getElementById("health2");
    habilitat1 = document.getElementById("hab1");
    habilitat2 = document.getElementById("hab2");
    habilitat3 = document.getElementById("hab3");
    habilitat4 = document.getElementById("hab4");
    mapDisplay = document.getElementById("mapa");
    pokemonImg1 = document.getElementById('pok1');
    pokemonImg2 = document.getElementById('pok2');
    pokemonImg3 = document.getElementById('pok3');
    pokemonImg4 = document.getElementById('pok4');
    pokemonImg5 = document.getElementById('pok5');
    pokemonImg6 = document.getElementById('pok6');
}

function loadPokemonToVar() {
    pokemon1 = JSON.parse(pokemons[0]);
    pokemon2 = JSON.parse(pokemons[1]);
    pokemon3 = JSON.parse(pokemons[2]);
    pokemon4 = JSON.parse(pokemons[3]);
    pokemon5 = JSON.parse(pokemons[4]);
    pokemon6 = JSON.parse(pokemons[5]);
}

function mostrarPokemons() {
    pokemonImg1.src = pokemon1.pokemon_sprites_front;
    pokemonImg2.src = pokemon2.pokemon_sprites_front;
    pokemonImg3.src = pokemon3.pokemon_sprites_front;
    pokemonImg4.src = pokemon4.pokemon_sprites_front;
    pokemonImg5.src = pokemon5.pokemon_sprites_front;
    pokemonImg6.src = pokemon6.pokemon_sprites_front;
}

function changeEvent(pokemonTarget){
    pokemonChosed = pokemonTarget.target.value;
    if(playing) {

    } else {
        if(selectedPokemonImg != null) selectedPokemonImg.style.backgroundColor = "white";
        switch (pokemonChosed) {
            case 1:
                setPokemonDetails(pokemon1, 1);
                firstPokemon = pokemon1;
                selectedPokemonImg = pokemon1;
                break;
            case 2:
                setPokemonDetails(pokemon2, 2);
                firstPokemon = pokemon2;
                selectedPokemonImg = pokemon2;
                break;
            case 3:
                setPokemonDetails(pokemon3, 3);
                firstPokemon = pokemon3;
                selectedPokemonImg = pokemon3;
                break;
            case 4:
                setPokemonDetails(pokemon4, 4);
                firstPokemon = pokemon4;
                selectedPokemonImg = pokemon4;
                break;
            case 5:
                setPokemonDetails(pokemon5, 5);
                firstPokemon = pokemon5;
                selectedPokemonImg = pokemon5;
                break;
            case 6:
                setPokemonDetails(pokemon6, 6);
                firstPokemon = pokemon6;
                selectedPokemonImg = pokemon6;
                break;
            default:
                break;
        }
        selectedPokemonImg.style.backgroundColor = "grey";   
    }
}

function cambiarPokemon(pokemonIdToDisplay) {
    switch (pokemonIdToDisplay) {
        case pokemon1.pokemon_id:
            setPokemonDetails(pokemon1, 1);
            break;
        case pokemon2.pokemon_id:
            setPokemonDetails(pokemon2, 2);
            break;
        case pokemon3.pokemon_id:
            setPokemonDetails(pokemon3, 3);
            break;
        case pokemon4.pokemon_id:
            setPokemonDetails(pokemon4, 4);
            break;
        case pokemon5.pokemon_id:
            setPokemonDetails(pokemon5, 5);
            break;
        case pokemon6.pokemon_id:
            setPokemonDetails(pokemon6, 6);
            break;
        default:
            break;
    }
    selectedPokemonImg.style.backgroundColor = "grey";  
}

function buscarPartida(){
    if (firstPokemon != null) {
        jugarDiv.style.display = "none";
        mapDisplay.style.display = "block";
        ProgressBar1.disabled = true;
        ProgressBar2.disabled = true;
        ProgressBar1.style.display = "inline";
        ProgressBar2.style.display = "inline";
        parseUser();
        socket.buscarPartida(user, (status) =>{
            console.log(status);
        });
    } else {
        alert("Selecciona un pokemon abans de buscar una partida")
    }
}

function jugar() {
    

}

function setPokemonDetails(pokemonToDisplay, pokeSelectId) {
    ProgressBar1.max = JSON.parse(pokemons[pokeSelectId - 1]).pokemon_stats_hp;
    selectedPokemonId = pokemonToDisplay.pokemon_id;
    pokemonMapaImg.src = pokemonToDisplay.pokemon_sprites_front;
    pokemonMapaName.textContent = pokemonToDisplay.pokemon_name;
    ProgressBar1.value = pokemonToDisplay.pokemon_stats_hp;
    habilitat1 = pokemonToDisplay.atacs[0];
    habilitat2 = pokemonToDisplay.atacs[1];
    habilitat3 = pokemonToDisplay.atacs[2];
    habilitat4 = pokemonToDisplay.atacs[3];
    DOMhabilitat1.textContent = habilitat1.movement_name + " \n " + habilitat1.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[0].movement_pp;
    DOMhabilitat2.textContent = habilitat2.movement_name + " \n " + habilitat1.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[1].movement_pp;
    DOMhabilitat3.textContent = habilitat3.movement_name + " \n " + habilitat1.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[2].movement_pp;
    DOMhabilitat4.textContent = habilitat4.movement_name + " \n " + habilitat1.movement_pp + " / " + JSON.parse(pokemons[pokeSelectId - 1]).atacs[3].movement_pp;
}

function parseUser(){
    user.player_first_pokemon = firstPokemon.pokemon_id;
    user.player_pokemon1 = pokemon1.pokemon_id;
    user.player_pokemon2 = pokemon2.pokemon_id;
    user.player_pokemon3 = pokemon3.pokemon_id;
    user.player_pokemon4 = pokemon4.pokemon_id;
    user.player_pokemon5 = pokemon5.pokemon_id;
    user.player_pokemon6 = pokemon6.pokemon_id;
}
