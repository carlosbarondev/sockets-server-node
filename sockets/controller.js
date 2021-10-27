const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        // Retroalimentación al cliente
        const id = 123456;
        callback({ id, fecha: new Date().getTime() });

        console.log('enviar mensaje recibido en el server: ', payload);
        socket.broadcast.emit('enviar-mensaje', payload);
    });

}

module.exports = {
    socketController
}