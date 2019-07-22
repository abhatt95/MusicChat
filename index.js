var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  //console.log(__dirname + '/index.html');
  //console.log(__dirname + '/piano.mp3');

});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg );
    //io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
