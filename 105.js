// Explain how request and response objects work in the HTTP module 
// of Node.js. Write a short code snippet demonstrating the use of 
// res.write() and res.end().

const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send response in parts
    res.write("Hello, ");
    res.write("this is Node.js server.\n");

    // End response
    res.end("Goodbye!");
}).listen(3003)