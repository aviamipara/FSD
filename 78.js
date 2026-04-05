// Write a node.js script using event handling to consider an errorneous 
// triangle to find area. Take fix values of all three sides. 
// (1) If any of the side is negative, then print the message “Sides must 
// be positive” using event handler. 
// (2) If perimeter of triangle is negative then print the message 
// “Perimeter must be positive” using event handler.
// (3) Both above messages must be printed in sequence

const EventEmitter = require('events');
const event = new EventEmitter();

// Fixed sides
let a = -5, b = 4, c = 3;

// Event 1: Check sides
event.on('checkSides', () => {
    if (a < 0 || b < 0 || c < 0) {
        console.log("Sides must be positive");
    }
    
    // Trigger next event
    event.emit('checkPerimeter');
});

// Event 2: Check perimeter
event.on('checkPerimeter', () => {
    let perimeter = a + b + c;

    if (perimeter < 0) {
        console.log("Perimeter must be positive");
    }
});

// Start execution
event.emit('checkSides');