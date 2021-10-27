const socketController = (socket) => {

    console.log('Servidor: Cliente conectado - ', socket.id);

    socket.on('disconnect', () => {
        console.log('Servidor: Cliente desconectado - ', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        // Retroalimentación al cliente
        const retro = {
            id: payload.id,
            fecha: new Date().getTime()
        }
        console.log('Servidor: Enviando retroalimentación al cliente ', socket.id, ' - ', retro);
        callback(retro);

        // Broadcast del mensaje recibido del cliente
        console.log('Servidor: enviar-mensaje - broadcast del cliente ', socket.id, ' - ', payload);
        socket.broadcast.emit('enviar-mensaje', payload);
    });

}

module.exports = {
    socketController
}