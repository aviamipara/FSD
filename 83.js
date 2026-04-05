// Write a nodeJS script to fire an event named calculate which 
// calculates the total marks of 5 subjects about of 25 marks and 
// displays the total marks on console as an output.The calculate event 
// fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console.

const EventEmitter = require('events');
const event = new EventEmitter();

// Marks of 5 subjects (each out of 25)
let marks = [20, 18, 22, 19, 21];

// Event 1: Calculate total
event.on('calculate', () => {
    let total = marks.reduce((sum, m) => sum + m, 0);

    console.log("Total Marks:", total);

    // Fire percentage event
    event.emit('percentage', total);
});

// Event 2: Calculate percentage
event.on('percentage', (total) => {
    let maxMarks = 5 * 25; // 125
    let percent = (total / maxMarks) * 100;

    console.log("Percentage:", percent.toFixed(2) + "%");
});

// Trigger first event
event.emit('calculate');