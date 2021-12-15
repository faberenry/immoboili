//ServerSide 
var express = require("express");
var socket = require("socket.io");

//app setup
var app = express();
var server = app.listen(30000, function(){
    console.log("listening to requests on port 30000");
});

//static files (clientside)
app.use(express.static("public"));

//socket setup
var io = socket(server);

io.on("connection", function(socket){
    console.log("User connected" + " | " + "UserID: " + socket.id)

    socket.on("chat", function(data){
        io.sockets.emit("chat", data);
        console.log(socket.id + " | " + data.handle + " : " + data.message);
    });
});