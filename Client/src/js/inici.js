var userName;
var userNick;

window.onload=function(){
    document.getElementById("jugar").addEventListener("click", verificarNick)
}
function verificarNick() {
    userName = document.getElementById("nick").value;
    document.cookie = userName;
    if (userName != "") {
        console.log("Correct"); 
    } else {
        alert("Abans de jugar has de posar un User Name")
        event.preventDefault();
    }
}