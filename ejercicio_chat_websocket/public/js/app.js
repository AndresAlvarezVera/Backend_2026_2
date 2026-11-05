const socket = io();
console.log('Conectado el JS');

const nameInput = document.getElementById('nameInput');
const sendButton = document.getElementById('sendButton');
const chatContainer = document.getElementById('chatContainer');

socket.emit('connection', "Hola soy el cliente");

sendButton.addEventListener('click', () => {
    if (nameInput.value.trim() !== '') {
        socket.emit('message', nameInput.value);
    } else {
        alert('Por favor ingresa tu nombre antes de enviar un mensaje.');
    }
});

socket.on('message', (data) => {
    const messageElement = document.createElement('p');
    messageElement.textContent = data;
    chatContainer.appendChild(messageElement);
});