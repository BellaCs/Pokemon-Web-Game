import * as api from "./api.js"
import { pokemons } from "./inici.js";
var pokeballs;
var userNick = document.cookie;
var pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6;
window.onload=function(){
    pokemon1 = JSON.parse(pokemons[0]);
    pokemon2 = JSON.parse(pokemons[1]);
    pokemon3 = JSON.parse(pokemons[2]);
    pokemon4 = JSON.parse(pokemons[3]);
    pokemon5 = JSON.parse(pokemons[4]);
    pokemon6 = JSON.parse(pokemons[5]);
    console.log(userNick);
    mostrarPokemons();
    document.getElementById("jugar").addEventListener("click", jugar);
    pokeballs = document.getElementsByClassName("selectPokeballs");

    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", cambiarPokemon)
        console.log("va")
    }
}

function mostrarPokemons() {
    document.getElementById('pok1').src = pokemon1.pokemon_sprites_front;
    document.getElementById('pok2').src = pokemon2.pokemon_sprites_front;
    document.getElementById('pok3').src = pokemon3.pokemon_sprites_front;
    document.getElementById('pok4').src = pokemon4.pokemon_sprites_front;
    document.getElementById('pok5').src = pokemon5.pokemon_sprites_front;
    document.getElementById('pok6').src = pokemon6.pokemon_sprites_front;
}

function cambiarPokemon(pokeball) {
    let pokeImgId = pokeball.target.name;
    console.log(pokeImgId);
    pokeImgId--;
    var ProgressBar1 = document.getElementById("health1");
    var ProgressBar2 = document.getElementById("health2");
    ProgressBar1.disabled = true;
    ProgressBar2.disabled = true;
    ProgressBar1.style.display = "inline";
    ProgressBar2.style.display = "inline";
    document.getElementById('pokemon1').src = JSON.parse(pokemons[pokeImgId]).pokemon_sprites_front;
    document.getElementById('pokemon-1-name').textContent = JSON.parse(pokemons[pokeImgId]).pokemon_name;
    document.getElementById('health1').textContent = JSON.parse(pokemons[pokeImgId]).pokemon_stats_hp + "/" + JSON.parse(pokemons[pokeImgId]).pokemon_stats_hp;
    ProgressBar1.max = JSON.parse(pokemons[pokeImgId]).pokemon_stats_hp;
    ProgressBar1.value = JSON.parse(pokemons[pokeImgId]).pokemon_stats_hp;
    document.getElementById("hab1").textContent = JSON.parse(pokemons[pokeImgId]).atacs[0].movement_name + " " + JSON.parse(pokemons[pokeImgId]).atacs[0].movement_pp;
    document.getElementById("hab2").textContent = JSON.parse(pokemons[pokeImgId]).atacs[1].movement_name + " " + JSON.parse(pokemons[pokeImgId]).atacs[0].movement_pp;
    document.getElementById("hab3").textContent = JSON.parse(pokemons[pokeImgId]).atacs[2].movement_name + " " + JSON.parse(pokemons[pokeImgId]).atacs[0].movement_pp;
    document.getElementById("hab4").textContent = JSON.parse(pokemons[pokeImgId]).atacs[3].movement_name + " " + JSON.parse(pokemons[pokeImgId]).atacs[0].movement_pp;
}

function jugar() {
    document.getElementById("divJugar").style.display = "none";
    document.getElementsByClassName("mapa")[0].style.display = "block";    
}
