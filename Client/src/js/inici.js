import * as api from "./api.js"
export var pokemons=[];
var userName;
var userNick;
randomPokemons();
document.getElementById("jugar").addEventListener("click", goToPlay);
function goToPlay(){
    userName = document.getElementById("nick").value;
    document.cookie = userName;
    if (userName != "") {
        console.log("Correct"); 
       
        window.location.href="index.html";
    } else {
        alert("Abans de jugar has de posar un User Name")
        event.preventDefault();
    }
    
}
function randomPokemons(){
    for (let i = 0; i < 6; i++) {
        let pokemonId = Math.floor(Math.random() * 151 + 1);
        api.getPokemon(pokemonId, result =>{
            pokemons.push(result)
        })
      }
    
}