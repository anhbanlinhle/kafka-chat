import express from 'express'
import initWebRoute from './route/web.js'
import cors from 'cors'
import {Server} from "socket.io";
require('dotenv').config()

const app = express()
app.use(cors())
const port = process.env.PORT || 1111
const http= require('http');
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

initWebRoute(app)


server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

export default io
