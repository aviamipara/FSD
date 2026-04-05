// Write a Node.js program to create an HTTP server using the http 
// module that listens on port 3000 and displays different messages for / 
// and /about routes. Explain how basic routing is implemented using 
// the request object.


const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Routing based on URL
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to Home Page");
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Welcome to About Page");
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page Not Found");
    }
}).listen(3000)