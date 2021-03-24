export function getPokemon(id, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://172.24.19.11:3000/pokemon/' + id, false);
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.onload = function () {
       //pasem el retorn a la funció callback
       console.log(this.responseText);
       callback(this.responseText);
       
    };
    xmlHttp.onerror = function () {
       document.getElementById('txt1').innerHTML =
       "hi ha hagut un error en la consulta a l'API";
    };
    xmlHttp.send();
 }