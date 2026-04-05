// Write a program to demonstrate various methods of path module in 
// Node.js
const path = require('path');

// Sample file path
let filePath = '/user/docs/report.txt';

// 1. dirname()
console.log("Directory Name:", path.dirname(filePath));

// 2. basename()
console.log("Base Name:", path.basename(filePath));

// 3. extname()
console.log("Extension:", path.extname(filePath));

// 4. join()
let joinedPath = path.join('/user', 'docs', 'file.txt');
console.log("Joined Path:", joinedPath);

// 5. resolve()
let resolvedPath = path.resolve('docs', 'file.txt');
console.log("Resolved Path:", resolvedPath);

// 6. parse()
let parsed = path.parse(filePath);
console.log("Parsed Object:", parsed);

// 7. format()
let formatted = path.format(parsed);
console.log("Formatted Path:", formatted);

// 8. isAbsolute()
console.log("Is Absolute:", path.isAbsolute(filePath));

// 9. normalize()
let messyPath = '/user//docs/../docs/report.txt';
console.log("Normalized Path:", path.normalize(messyPath));