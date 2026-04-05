// Write a Node.js program using the events module to create an event 
// emitter, define three events (start, process, end) that print messages to 
// the console, and fire all three events in order

const EventEmitter = require('events');
const event = new EventEmitter();

// Define events
event.on('start', () => {
    console.log("Process started");
});

event.on('process', () => {
    console.log("Processing data...");
});

event.on('end', () => {
    console.log("Process ended");
});

// Fire events in order
event.emit('start');
event.emit('process');
event.emit('end');