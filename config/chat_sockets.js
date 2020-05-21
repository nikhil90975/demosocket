module.exports.chatSockets = async function(socketServer){
    let io = require('socket.io')(socketServer);
    io.on('connection',(socket) => {
        console.log('a user connected');
        socket.on('disconnect', () => {
            console.log('user disconnected');
          });
          socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
          });
    })
}