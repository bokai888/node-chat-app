const path = require('path');
const express = require('express');
const hbs = require('hbs');
const socketIO = require('socket.io');
const http = require('http');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', '/public');
const hbsPath = path.join((__dirname, '..', '/views'));
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User Connected");

    socket.on('disconnect', () => {
        console.log("User was disconnected");
    });

});


server.listen(port,() => {
    console.log(`Started on Port ${port}`);
});