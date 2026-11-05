import express from 'express'
import { Server } from 'socket.io'
import viewsRouter from './routes/views.routers.js'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'

const app = express()
const PORT = 3000
const httpServer = app.listen(PORT, () => { console.log(`Example app listening on port ${PORT}`) })

const socketServer = new Server(httpServer)

//configurar archivos estaticos
app.use(express.static(__dirname + '/../public'))

//configurar motor de plantillas
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use('/', viewsRouter)

socketServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado -->', socket.id)

    socket.on('message', (data) => {
        console.log(data)
        socketServer.emit('message', data)
    })

    // socket.emit("mensaje_privado", "este es un mensaje para un socket en particular");
    // socket.broadcast.emit("privadoFiltrado","Mensaje para todos menos el particular");
    // socketServer.emit("MensajePublico","Este mensaje lo reciben todos los sockets");
});
