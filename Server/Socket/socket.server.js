const Express = require("express");
const httpServer = require("http").Server(Express);
const io=require("socket.io")(httpServer, {
    cors: { 
        origin: "*", 
        methods: ["GET","POST"]
    }
});

var partidaEnEspera = null;
var partidasActuales = [];


io.on("connection", socket =>  {
       
     console.log("jugador conectado \n"); 

     socket.on('disconnect', function(){
         
     });
});

httpServer.listen(3500, () => {});

