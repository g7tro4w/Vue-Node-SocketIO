const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8050);

app.get('/', (req, res) => {
  res.send('Hello!');
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.emit('news', {hello: 'world'});
  socket.on('other event', (data) => {
    console.log(data)
  })

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})
