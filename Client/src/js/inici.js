var userName;
var userNick;

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