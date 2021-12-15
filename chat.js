// make connection

//front-end socket
var socket = io.connect("localhost:30000");

//Query DOM
var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");


//emit events
btn.addEventListener("click", function(){
    socket.emit("chat", {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});


//listen events
socket.on("chat", function(data){
    output.innerHTML += "<p><strong>" + data.handle + "</strong> : " + data.message + "</p>";
})


//send message trugh keyperss
document.addEventListener('keydown', function(event) {
    if(event.key=="Enter"){
        socket.emit("chat", {
            message: message.value,
            handle: handle.value
        });
        message.value = "";
    }
});
