var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

var port = process.env.PORT || 3000;



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', function (socket) {

  socket.on('chat message', function (msg, username) {
    io.emit('chat message', msg, username);
  });

  socket.on('newuser', function (username) {
    io.emit('newuser', username);
  });

  socket.on('usertyping', function (username) {
    io.emit('usertyping', username);
  });

});



http.listen(port, function () {

  console.log('listening on *:' + port);

});
