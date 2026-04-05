// Write a Node.js program that uses the events module to do the 
// following:
// Fire an event "welcome" that prints "Welcome to Node.js" on the 
// console.
// Fire an event "time" that prints the current system time.
// Fire an event "bye" that prints "Goodbye!".

const EventEmitter = require('events');
const event = new EventEmitter();

// Event: welcome
event.on('welcome', () => {
    console.log("Welcome to Node.js");
});

// Event: time
event.on('time', () => {
    let currentTime = new Date();
    console.log("Current Time:", currentTime.toLocaleString());
});

// Event: bye
event.on('bye', () => {
    console.log("Goodbye!");
});

// Fire events
event.emit('welcome');
event.emit('time');
event.emit('bye');