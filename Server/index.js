const Express = require("express");
const httpServer = require("http").Server(Express);
const io=require("socket.io")(httpServer, {
    cors: { 
        origin: "*", 
        methods: ["GET","POST"]
    }
});



io.on("connection", socket =>  {
    
     console.log("jugador conectado \n"); 

     socket.on("pedirPokemon", function(msg, callback){    
        
        callback();
        
     });

     socket.on('disconnect', function(){
         
     });
});

httpServer.listen(3000, () => {});

