// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('Cliente: Conectado al servidor');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('Cliente: Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) => {
    console.log("Cliente: Recibiendo del servidor - ", payload);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime()
    };
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Cliente: Retroalimentación del servidor - ', id); // Retroalimentación desde el servidor, tercer parametro (id)
    });
});