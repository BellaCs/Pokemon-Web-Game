import * as socket from "./socket.js"
var pokemons;
var pokeballs;
window.onload=function(){
    document.getElementById("pokemons").addEventListener("click",event => {
        let pokeList = pedirPokemons();
        
        pokeList.then((sucsses)=>{
            pokemons = sucsses;
            mostrarPokemons();
        })
        pokeballs = document.getElementsByClassName("selectPokeballs")
        for (let index = 0; index < pokeballs.length; index++) {
            pokeballs[index].addEventListener("click", cambiarPokemon)
            console.log("va")
        }
    });
    
}

function mostrarPokemons() {
    document.getElementById('pok1').src = pokemons[0].pokemon_sprites_front;
    document.getElementById('pok2').src = pokemons[1].pokemon_sprites_front;
    document.getElementById('pok3').src = pokemons[2].pokemon_sprites_front;
    document.getElementById('pok4').src = pokemons[3].pokemon_sprites_front;
    document.getElementById('pok5').src = pokemons[4].pokemon_sprites_front;
    document.getElementById('pok6').src = pokemons[5].pokemon_sprites_front;
}

function cambiarPokemon(pokeball) {
    let pokeImgId = pokeball.target.name;
    console.log(pokeImgId);
    document.getElementById('pokemon1').src = pokemons[pokeImgId].pokemon_sprites_front;
    document.getElementById('pokemon2').src = pokemons[pokeImgId].pokemon_sprites_front;
    document.getElementById('nomPokemon').textContent = pokemons[pokeImgId].pokemon_name;
    document.getElementById('nomPokemon2').textContent = pokemons[pokeImgId].pokemon_name;
    document.getElementById("hab1").textContent = pokemons[pokeImgId].atacs[0].movement_name;
    document.getElementById("hab2").textContent = pokemons[pokeImgId].atacs[1].movement_name;
    document.getElementById("hab3").textContent = pokemons[pokeImgId].atacs[2].movement_name;
    document.getElementById("hab4").textContent = pokemons[pokeImgId].atacs[3].movement_name;
}


async function pedirPokemons() {
    return await socket.pedirPokemons();
}