var pokemons;
var pokeballs;
var pokemon1;
window.onload=function(){
    pokemons = arrayPokemons();
    document.getElementById("pokemons").addEventListener("click", myFunction);
    pokeballs = document.getElementsByClassName("selectPokeballs");
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", cambiarPokemon);
    }
}


function myFunction() {
    array = pedirPokemons();
    console.log(array);
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
}