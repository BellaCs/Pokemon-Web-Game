import * as socket from "./socket.js"
import * as api from "./api.js"
var pokemon;
var pokeballs;
var userNick = document.cookie;

window.onload=function(){
    getPokemons(function(pokemons) {
        pokemon = pokemons;
        mostrarPokemons();
    })
    console.log(userNick);
    document.getElementById("jugar").addEventListener("click", jugar);

    pokeballs = document.getElementsByClassName("selectPokeballs")
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", cambiarPokemon)
        console.log("va")
    }
}
function mostrarPokemons() {
    document.getElementById('pok1').src = pokemon[0].pokemon_sprites_front;
    document.getElementById('pok2').src = pokemon[1].pokemon_sprites_front;
    document.getElementById('pok3').src = pokemon[2].pokemon_sprites_front;
    document.getElementById('pok4').src = pokemon[3].pokemon_sprites_front;
    document.getElementById('pok5').src = pokemon[4].pokemon_sprites_front;
    document.getElementById('pok6').src = pokemon[5].pokemon_sprites_front;
}

function cambiarPokemon(pokeball) {
    let pokeImgId = pokeball.target.name;
    console.log(pokeImgId);
    var ProgressBar1 = document.getElementById("health1");
    var ProgressBar2 = document.getElementById("health2");
    ProgressBar1.style.display = "inline";
    ProgressBar2.style.display = "inline";
    document.getElementById('pokemon1').src = pokemon[pokeImgId].pokemon_sprites_front;
    document.getElementById('pokemon-1-name').textContent = pokemon[pokeImgId].pokemon_name;
    document.getElementById("hab1").textContent = pokemon[pokeImgId].atacs[0].movement_name + " " + pokemon[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab2").textContent = pokemon[pokeImgId].atacs[1].movement_name + " " + pokemon[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab3").textContent = pokemon[pokeImgId].atacs[2].movement_name + " " + pokemon[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab4").textContent = pokemon[pokeImgId].atacs[3].movement_name + " " + pokemon[pokeImgId].atacs[0].movement_pp;
}


async function pedirPokemons() {
    return await socket.pedirPokemons();
}
function jugar() {
    document.getElementById("divJugar").style.display = "none";
    document.getElementsByClassName("mapa")[0].style.display = "block";
    let pokeList = pedirPokemons(userNick);
    
    pokeList.then((sucsses)=>{
        console.log(sucsses);
        pokemon = sucsses;
        mostrarPokemons();
        
    })
    
}