import * as socket from "./socket.js"
var pokemons;
var pokeballs;
window.onload=function(){
    document.getElementById("pokemons").addEventListener("click",event => {
        let pokeList = await socket.pedirPokemons()
        
        pokeList.then((sucsses)=>{
            console.log(sucsses)
        })
    });
    pokeballs = document.getElementsByClassName("selectPokeballs")
    for (let index = 0; index < pokeballs.length; index++) {
        pokeballs[index].addEventListener("click", cambiarPokemon)
    }
}

function cambiarPokemon(pokeball) {
    let pokeImgId = pokeball.target.name
    console.log(pokeImgId)
}