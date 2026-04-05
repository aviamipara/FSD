// Write a node.js script to print query string of URL on console as well 
// as on file using ES6.

// Import required modules (ES6 style)
import { URL } from 'url';
import fs from 'fs';

// Sample URL (you can change this)
const urlString = 'http://localhost:3000/?name=Avi&age=21&course=NodeJS';

// Create URL object
const myURL = new URL(urlString);

// Get query parameters
const params = myURL.searchParams;

// Convert params to object
let queryObject = {};
params.forEach((value, key) => {
    queryObject[key] = value;
});

// Convert object to string format
const output = JSON.stringify(queryObject, null, 2);

// Print to console
console.log("Query Parameters:");
console.log(output);

// Write to file
fs.writeFile('query_output.json', output, (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("Query parameters saved to query_output.json");
    }
});