// Develop a Node.js application that parses query parameters from a 
// URL using the url module and displays them in the browser. 
// Demonstrate the use of url.parse() with query parsing enabled.

const http = require('http');
const url = require('url');

// Create server
const server = http.createServer((req, res) => {

    // Parse URL with query = true
    let parsedUrl = url.parse(req.url, true);

    let query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Display query parameters
    res.write("<h2>Query Parameters:</h2>");

    res.end();
}).listen(3002)