import "../../node_modules/socket.io-client/dist/socket.io.js"


const socket = io("ws://172.24.19.11:3500", {
    transports : ['websocket', 'polling', 'flashsocket']
});


socket.connect();

socket.on('connect', function () {

    console.log("connected \n");

});

socket.on('disconnect', function () {
    console.log('disconnected');
});

