// Write a node.js script to create two listeners for a common event call 
// their respective callbacks. Print number of events associated with an 
// emitter. Remove one of the listeners & call remaining listners again. 
// Print number of remaining listners also

const EventEmitter = require('events');
const event = new EventEmitter();

// Listener 1
const listener1 = () => {
    console.log("Listener 1 executed");
};

// Listener 2
const listener2 = () => {
    console.log("Listener 2 executed");
};

// Add listeners to same event
event.on('myEvent', listener1);
event.on('myEvent', listener2);

// Call event (both listeners run)
console.log("First call:");
event.emit('myEvent');

// Print number of listeners
console.log("Total listeners:", event.listenerCount('myEvent'));

// Remove one listener
event.removeListener('myEvent', listener1);

// Call event again (only one listener runs)
console.log("\nAfter removing one listener:");
event.emit('myEvent');

// Print remaining listeners
console.log("Remaining listeners:", event.listenerCount('myEvent'));