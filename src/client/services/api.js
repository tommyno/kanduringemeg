import io from 'socket.io-client';
import {delay} from '../utils/helpers.js';

const socket = io();

export async function initiateCall({ number }) {
    socket.emit('message', {
        type: 'initiate-call',
        number,
    });
}

export function onStatusChange(handler) {
    socket.on('message', (message) => {
        handler(message);
    });
}
