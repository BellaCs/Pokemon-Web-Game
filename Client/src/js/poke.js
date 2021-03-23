import * as socket from "./socket.js"
var pokemons;
var pokeballs;
var userNick = document.cookie;

window.onload=function(){
    console.log(userNick);
    document.getElementById("pokemons").addEventListener("click",event => {
        let pokeList = pedirPokemons(userNick);
        
        pokeList.then((sucsses)=>{
            console.log(sucsses);
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
    var ProgressBar1 = document.getElementById("health1");
    var ProgressBar2 = document.getElementById("health2");
    ProgressBar1.style.display = "inline";
    ProgressBar2.style.display = "inline";
    document.getElementById('pokemon1').src = pokemons[pokeImgId].pokemon_sprites_front;
    document.getElementById('pokemon-1-name').textContent = pokemons[pokeImgId].pokemon_name;
    document.getElementById("hab1").textContent = pokemons[pokeImgId].atacs[0].movement_name + " " + pokemons[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab2").textContent = pokemons[pokeImgId].atacs[1].movement_name + " " + pokemons[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab3").textContent = pokemons[pokeImgId].atacs[2].movement_name + " " + pokemons[pokeImgId].atacs[0].movement_pp;
    document.getElementById("hab4").textContent = pokemons[pokeImgId].atacs[3].movement_name + " " + pokemons[pokeImgId].atacs[0].movement_pp;
}


async function pedirPokemons() {
    return await socket.pedirPokemons();
}