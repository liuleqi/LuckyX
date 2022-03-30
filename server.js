'use strict'

var http = require('http');

var express = require('express');

var serveIndex = require('serve-index');

var app = express();


app.use(serveIndex('./dist'));
app.use(express.static('./dist'));


var http_server = http.createServer(app);
http_server.listen(3003);

var io = require('socket.io')(http_server, {
  path: '/rtcket'
});
http_server.on('listening', onListening);
function onListening () {
  var addr = http_server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

let clients = []
io.on('connection', function (socket) {
  let query = socket.handshake.query
  let username = query.username
  let sex=query.sex
  let room = query.room
  let zoomLink=query.zoomLink
  console.log(username + 'connection')
  if (clients.some(v => v.userId === socket.id)) {
    return
  }
  socket.join(room)
  clients.push({ userId: socket.id, username,sex,zoomLink })
  // 过滤相同用户名
  if (clients.length > 1) {
    let hash = {}
    clients = clients.reduce((item, next) => {
      hash[next.username] ? ''
        : hash[next.username] = true && item.push(next)
      return item
    }, [])
    console.log('finally', clients)
  }
  if (clients.length >= 2) {
    io.sockets.in(room).emit('ready')
  }
  socket.emit('joined')
  socket.broadcast.to(room).emit('join', { username })
  io.sockets.in(room).emit('clients', clients)
  
  socket.on('pc message', function (data) {
    socket.to(data.to.userId).emit('pc message', data)
    console.log('Your peer get your invitation message')
  })
  
  socket.on('interact', function (data) {
    socket.to(data.to.userId).emit('interact', data)
    console.log('Your peer accept your video call')
  })
  
  socket.on('agree interact', function (data) {
    socket.to(data.from.userId).emit('agree interact', data)
    console.log('Accept your video call')
  })
  
  socket.on('refuse interact', function (data) {
    socket.to(data.from.userId).emit('refuse interact', data)
    console.log('Refuse your video call')
  })
  
  socket.on('stop interact', function (data) {
    socket.to(data.to.userId).emit('stop interact', data)
    console.log('End the video call')
  })
  socket.on('leave', function () {
    socket.emit('left')
    socket.broadcast.to(room).emit('leave', { userId: socket.id, username })
    clients = clients.filter(v => v.userId !== socket.id)
    io.sockets.in(room).emit('clients', clients)
  })
  
  socket.on('disconnect', function () {
    console.log(username + 'end connection')
    const obj = clients.filter(v => v.userId === socket.id)
    socket.broadcast.to(room).emit('close_disconnect', obj)
    console.log(room + 'close_disconnect', obj)
    clients = clients.filter(v => v.userId !== socket.id)
    io.sockets.in(room).emit('clients', clients)
    console.log(username + 'end')
  })
})
