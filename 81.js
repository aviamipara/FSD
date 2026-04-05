// Create an event emitter instance and register a couple of callbacks. 


const EventEmitter = require('events');

// Create instance
const event = new EventEmitter();

// Callback 1
event.on('greet', () => {
    console.log("Hello from callback 1");
});

// Callback 2
event.on('greet', () => {
    console.log("Hello from callback 2");
});

// Trigger event
event.emit('greet');