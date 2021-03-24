import "../../node_modules/socket.io-client/dist/socket.io.js"

const socket = io("ws://localhost:3000");


socket.connect();

socket.on('connect', function () {

    console.log("connected \n");

});

socket.on('disconnect', function () {
    console.log('disconnected');
});

