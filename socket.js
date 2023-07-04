let io;
const { Server } = require("socket.io");
module.exports = {
    init: (server) => {
        io = new Server(server);
        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.broadcast.emit('hi');
            socket.on('hello from client', (msg) => {
                console.log("some-event")
            });

            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
            });
        });
        io.on("some-event", (socket) => {
            console.log(socket);
            // socket.on('chat message', (msg) => {
            //     io.emit('chat message', msg);
            // });socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
        })
    },
    createAnEvent: () => {
        console.log("event-emitted");
        // io.broadcast.emit('hi');
        io.emit('hello from server', { someProperty: 'some value', otherProperty: 'other value' });
    }
};