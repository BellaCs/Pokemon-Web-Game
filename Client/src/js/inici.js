export var userName;

window.onload=function(){
    document.getElementById("jugar").addEventListener("click", verificarNick)
}
function verificarNick() {
    userName = document.getElementById("nick").value;
    if (userName != "") 
        console.log("Correct");
        
    else {
        alert("Abans de jugar has de posar un User Name")
        event.preventDefault();
    }
}