const express = require('express');
const io = require('socket.io');
const http = require('http');

const {delay} = require('../client/utils/helpers');

const app = express();
const httpServer = http.Server(app);
const socketServer = io(
    httpServer, {
        pingInterval: 15000, 
        pingTimeout: 30000
    }
);
const port = process.env.port || 3000;

// Serve static files from build folder
app.use(express.static(`${__dirname}/../../build`));

// API endpoints
app.get('/api/test', (req, res) => {
    res.send('hallo');
});

// Socket endpoint handler
socketServer.on('connection', async (socket) => {
    socket.on('message', async (message) => {
        if (message.type !== 'initiate-call') {
            return;
        }

        socket.emit('message', {
            type: 'initiating',
        });
    
        await delay(1000);

        socket.emit('message', {
            type: 'calling',
        });
    
        await delay(3000);

        socket.emit('message', {
            type: 'connected',
        });
    
        await delay(1000);

        socket.emit('message', {
            type: 'disconnected',
        });
    });
});

// Listen to port
httpServer.listen(port, () => {
    console.log('live!');
});