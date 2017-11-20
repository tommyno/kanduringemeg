import {delay} from '../utils/helpers.js';

const handlers = [];

const socket = io();

export async function initiateCall({ number }) {
    handlers.forEach((handler) => {
        handler({
            type: 'initiating',
        });   
    });

    await delay(1000);

    handlers.forEach((handler) => {
        handler({
            type: 'calling',
        });   
    });    

    await delay(3000);
    
    handlers.forEach((handler) => {
        handler({
            type: 'connected',
        });   
    });     
    
    await delay(1000);
    
    handlers.forEach((handler) => {
        handler({
            type: 'disconnected',
        });   
    });       
}

export function onStatusChange(handler) {
    handlers.push(handler);
}
