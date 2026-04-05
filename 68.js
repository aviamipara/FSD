// Write a Node.js program using the path module to take a file path 
// '/user/docs/report.txt' and print:
// The directory name
// The base file name
// The file extensio

const path = require('path');

// Given file path
let filePath = '/user/docs/report.txt';

// Directory name
console.log("Directory Name:", path.dirname(filePath));

// Base file name
console.log("Base File Name:", path.basename(filePath));

// File extension
console.log("File Extension:", path.extname(filePath));